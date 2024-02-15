import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/layout/Container";
import svgLoading from "./assets/loading.svg";
import Modal from "./components/Modal";
import Words from "./components/Words";
import Dialogue from "./components/Dialogue";
import ArrowButton from "./components/layout/ArrowButton";

function App() {
    const [palavras, setPalavras] = useState({});
    const [palavra, setPalavra] = useState("perhaps");
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDialogueOpen, setIsDialogueOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const data = await fetch("./src/data/informacoes.json").then(
                (data) => data.json(),
            );
            setPalavras(data);
            setLoading(false);
        };
        loadData();
    }, []);

    if (loading) {
        return <img src={svgLoading} alt="Carregando..." className="loading" />;
    }

    return (
        <>
            <Header />
            <main className="main">
                <Container text="Palavras">
                    <Words
                        words={palavras}
                        setIsModalOpen={setIsModalOpen}
                        setPalavra={setPalavra}
                    />
                </Container>
                <Container
                    text="Frases"
                    Action={ArrowButton}
                    action={setIsDialogueOpen}
                >
                    <Dialogue
                        words={palavras}
                        word={palavra}
                        isDialogueOpen={isDialogueOpen}
                        action={setIsPlaying}
                        state={isPlaying}
                    />
                </Container>
            </main>
            {isModalOpen && (
                <Modal
                    setIsModalOpen={setIsModalOpen}
                    word={palavra}
                    words={palavras}
                    action={setIsPlaying}
                    state={isPlaying}
                />
            )}
        </>
    );
}

export default App;
