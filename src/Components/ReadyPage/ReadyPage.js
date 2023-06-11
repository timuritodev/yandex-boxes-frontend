import "./ReadyPage.css";
import UniButton from "../UniButton/UniButton";

function ReadyPage() {
  return (
    <main className="readypage">
      <p className="readypage__text">
        Упакуйте товары и поставьте коробку на конвейер
      </p>
      <UniButton currentPage="readypage" />
    </main>
  );
}

export default ReadyPage;
