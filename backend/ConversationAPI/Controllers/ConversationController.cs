using Microsoft.AspNetCore.Mvc;
using ConversationAPI.Services;
using ConversationAPI.Dtos;

namespace ConversationAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AnalysisController(IConversationService conversationService) : ControllerBase
{
    private readonly IConversationService _conversationService = conversationService;

    [HttpPost]
    public async Task<ActionResult<ConversationDto>> AnalyzeConversation([FromBody] string query)
    {
        var result = await _conversationService.GetConversationResponse(query);
        if (result.Success == false) return BadRequest(result);

        return Ok(result);
    }
}
