
public class PredictionDto
{
    public string? TopIntent { get; set; }
    public required string ProjectKind { get; set; }
    public required List<IntentDto> Intents { get; set; }
    public List<object>? Entities { get; set; } // Assuming entities are objects, adjust type as necessary
}