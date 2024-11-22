using ConversationAPI.Dtos;
using ConversationAPI.Models;
using ConversationAPI.Repository;

namespace ConversationAPI.Services;

public class ConversationService : IConversationService
{
   private readonly IConversationRepository _conversationRespository;

    public ConversationService(IConversationRepository conversationRespository)
    {
        _conversationRespository = conversationRespository;
    }

    public async Task<ServiceResponse<ConversationDto>> GetConversationResponse(string query)
    {
        var result = await _conversationRespository.GetResponse(query);
        return result;
    }
}