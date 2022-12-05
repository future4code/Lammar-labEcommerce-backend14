import app from "./app"
import getAllCharacters from "./endpoints/getAllCharacters"
import createCharacters from "./endpoints/createCharacters"
import deleteCharacter from "./endpoints/deleteCharacter"

app.get("/character", getAllCharacters)
app.put("/character", createCharacters)
app.delete("/character/:id", deleteCharacter)
