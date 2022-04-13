import "./_homescreen.scss";

import Menu from "../../components/Menu";

export default function HomeScreen() {
    return (
        <>
            <Menu />
            <div className="div3">
                <h1>Olá, seja bem-vindo(a)</h1>
                <div className="texts">
                    <p>
                        Este é o Arte da Leitura, um sistema de integração
                        de uma biblioteca virtual a uma biblioteca física.
                    </p>
                    <p>
                        Criado em 2021 pela equipe de TCC (Trabalho de Conclusão de Curso)
                        Biblioteca Híbrida, pelos integrantes Diego Novaes, Felipe Queirós,
                        Gabriela Taline e Giovana Bernardo.
                    </p>
                </div>
            </div>
        </>
    );
}