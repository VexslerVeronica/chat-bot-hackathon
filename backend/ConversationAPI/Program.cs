using ConversationAPI.Repository;
using ConversationAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddScoped<IConversationService,ConversationService>();
builder.Services.AddScoped<IConversationRepository,ConversationRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
    builder =>
    {
        builder.WithOrigins("http://localhost:8081") // Adjust the origin as needed
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

app.UseCors("AllowOrigin");

app.UseHttpsRedirection();

app.MapControllers();

app.Run();