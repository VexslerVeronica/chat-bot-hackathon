using ConversationAPI.Dtos;
using ConversationAPI.Models;

namespace ConversationAPI.Repository;

public interface IConversationRepository
{
    Task<ServiceResponse<ConversationDto>> GetResponse(string query);
}