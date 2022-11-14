import app from "./app";

const main = () => {
    // Asignamos el puerto
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main();