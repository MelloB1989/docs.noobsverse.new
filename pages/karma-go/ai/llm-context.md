AI pkg: chat, single prompt, stream chat
Package: github.com/MelloB1989/ai

Usage:
1. Create KarmaAI:
kai := ai.NewKarmaAI(model, options...)
Options: WithMaxTokens(), WithTemperature(), WithTopP(), WithSystemMessage(), WithUserPrePrompt()

2. Chat:
resp, err := kai.ChatCompletion(models.AIChatHistory{Messages: []models.AIMessage{{Message: "msg", Role: models.User}}})

3. Single prompt:
resp, err := kai.GenerateFromSinglePrompt("prompt")

4. Stream chat:
chunkHandler := func(chunk openai.ChatCompletionChunk) { /* handle chunk */ }
resp, err := kai.ChatCompletionStream(chatHistory, chunkHandler)

5. CLI chat:
loop:
  get user input
  append to chatHistory
  call kai.ChatCompletion(chatHistory)
  print AI response
  append to chatHistory
until "exit"

Models: Llama3_8B, ApacClaude3_5Sonnet20240620V1, ChatModelChatgpt4oLatest
Roles: models.User, models.Assistant
