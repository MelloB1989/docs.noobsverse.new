# Karma AI Package Documentation

This package provides an interface for interacting with various AI models and services. It includes functionality for chat completions, single prompt generation, and streaming chat completions.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Creating a KarmaAI Instance](#creating-a-karmaai-instance)
   - [Chat Completion](#chat-completion)
   - [Single Prompt Generation](#single-prompt-generation)
   - [Streaming Chat Completion](#streaming-chat-completion)
   - [CLI Chat Implementation](#cli-chat-implementation)

## Installation

```
go get github.com/MelloB1989/karma/ai
```

## Usage

### Creating a KarmaAI Instance

To use the AI functionalities, first create a `KarmaAI` instance:

```go
import "github.com/MelloB1989/karma/ai"

kai := ai.NewKarmaAI(ai.Llama3_8B,
    ai.WithMaxTokens(100),
    ai.WithTemperature(0.5),
    ai.WithTopP(0.9),
    ai.WithSystemMessage("Your system message here"))
```

### Chat Completion

To perform a chat completion:

```go
import (
    "fmt"
    "github.com/MelloB1989/karma/ai"
    "github.com/MelloB1989/karma/models"
)

kai := ai.NewKarmaAI(ai.ApacClaude3_5Sonnet20240620V1,
    ai.WithSystemMessage("I am Kartik Deshmukh."),
    ai.WithTemperature(0.5),
    ai.WithMaxTokens(10),
    ai.WithTopP(0.9))

response, err := kai.ChatCompletion(models.AIChatHistory{
    Messages: []models.AIMessage{
        {
            Message: "Hello",
            Role:    models.User,
        },
    },
})
if err != nil {
    panic(err)
}
fmt.Println(response.AIResponse)
```

### Single Prompt Generation

To generate a response from a single prompt:

```go
kai := ai.NewKarmaAI(ai.Llama3_8B,
    ai.WithUserPrePrompt("This is Kartik Deshmukh."),
    ai.WithTemperature(0.5),
    ai.WithMaxTokens(10),
    ai.WithTopP(0.9))

response, err := kai.GenerateFromSinglePrompt("Hello!")
if err != nil {
    panic(err)
}
fmt.Println(response.AIResponse)
```

### Streaming Chat Completion

To perform a streaming chat completion:

```go
import (
    "fmt"
    "github.com/sashabaranov/go-openai"
    "github.com/MelloB1989/karma/ai"
    "github.com/MelloB1989/karma/models"
)

chunkHandler := func(chunk openai.ChatCompletionChunk) {
    fmt.Print(chunk.Choices[0].Delta.Content)
}

kai := ai.NewKarmaAI(ai.ChatModelChatgpt4oLatest, ai.WithUserPrePrompt("I am Kartik Deshmukh."))

response, err := kai.ChatCompletionStream(models.AIChatHistory{
    Messages: []models.AIMessage{
        {
            Message: "Hello, how to create a new file in Go?",
            Role:    models.User,
        },
    },
}, chunkHandler)

if err != nil {
    panic(err)
}
fmt.Println(response.AIResponse)
```

### CLI Chat Implementation

Here's an example of how to implement a CLI chat interface:

```go
func cliChatImplementation() {
    kai := ai.NewKarmaAI(ai.Llama3_8B,
        ai.WithMaxTokens(100),
        ai.WithTemperature(0.5),
        ai.WithTopP(0.9),
        ai.WithSystemMessage("Your system message here"))

    chatHistory := models.AIChatHistory{Messages: []models.AIMessage{}}
    var message string

    for message != "exit" {
        fmt.Print("You: ")
        fmt.Scanln(&message)
        chatHistory.Messages = append(chatHistory.Messages, models.AIMessage{Message: message, Role: models.User})

        response, err := kai.ChatCompletion(chatHistory)
        if err != nil {
            panic(err)
        }

        fmt.Println("AI: ", response.AIResponse)
        chatHistory.Messages = append(chatHistory.Messages, models.AIMessage{Message: response.AIResponse, Role: models.Assistant})
    }

    fmt.Println(chatHistory)
}
```

This implementation creates a simple command-line interface for chatting with the AI. The chat continues until the user types "exit".

Note: The example provided in the code includes content that may not be suitable for all audiences. Please adjust the system message and behavior as needed for your specific use case.
