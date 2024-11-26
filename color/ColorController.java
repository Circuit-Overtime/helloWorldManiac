@RestController //package import later
public class ColorController {
    @GetMapping("/color")
    public String getColor() {
        return "{\"color\": \"#FF00000\"}"; //keeping default color as orange
    }
}
