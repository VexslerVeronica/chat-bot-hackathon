namespace ConversationAPI.Models;

public class ServiceResponse<T>
{
    public string? Data { get; set; }
    public bool Success { get; set; } = true;
    public string Message { get; set; } = string.Empty;
}