import { AsideOptions } from "~/components/aside-options";

const teste = [
  "Teste de item",
  "Teste de items",
  "Teste de itemss",
  "Teste de itemsss",
  "Teste de itemssss",
  "Teste de it",
  "Teste de",
  "Teste",
  "Testes",
  "Teste de itens",
  "Teste de produtos",
];

export default function Home() {
  return (
    <main>
      <AsideOptions listOptions={teste} isFullScreen />
    </main>
  );
}
