using ConversationAPI.Dtos;
using ConversationAPI.Models;

namespace ConversationAPI.Services;

public interface IConversationService
{
    Task<ServiceResponse<ConversationDto>> GetConversationResponse(string query);
}