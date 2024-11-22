using Azure;
using Azure.AI.OpenAI;
using ConversationAPI.Dtos;
using ConversationAPI.Models;
using OpenAI.Chat;

namespace ConversationAPI.Repository;
public class ConversationRepository: IConversationRepository
{
    public async Task<ServiceResponse<ConversationDto>> GetResponse(string query)
        {
            var response = new ServiceResponse<ConversationDto>();

            AzureOpenAIClient azureClient = new(
                // new Uri("https://poc-ai-chat-bp.openai.azure.com/"),
                new Uri("https://oly-hack-lang.cognitiveservices.azure.com/"),
                new AzureKeyCredential("a79c1ef85f064895b32f794c133afead"));
            ChatClient chatClient = azureClient.GetChatClient("Microsoft.Template-20240809103236");

    Console.WriteLine("chatClient: " + chatClient);
            try 
            {
            Console.WriteLine("attempting to complete " + query);
            ChatCompletion completion = chatClient.CompleteChat(
                    [
                        // System messages represent instructions or other guidance about how the assistant should behave
                        new SystemChatMessage("You are a helpful customer service agent that acts as an assistant with electrical vehicle charging."),
                        // User messages represent user input, whether historical or the most recent input
                         new UserChatMessage(query),
                    ]);
    Console.WriteLine("after: " + completion.Content[0]);
                var result = completion.Content[0]?.ToString();
                        response.Data = result;
                        response.Success = true;    
            }
            catch (Exception err)
            {
                response.Success = false;
                response.Message = err.Message;
            }

            return response;
        }
}