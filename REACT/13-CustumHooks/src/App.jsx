import "./App.css";
import useCopyToClipboard from "./hooks/useCopyToClipboard";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";

function App() {
  const { count, increase, decrease } = useCounter();

  const { open, change } = useToggle();

  const [copied, copy] = useCopyToClipboard("Pes Etme Çalış");
  return (
    <>
      {/* <div className="counter">
        <div>{count}</div>
        <div>
          <button onClick={increase}>Arttır</button>
          <button onClick={decrease}>Azalt</button>
        </div>
      </div> */}
      {/* <div className="box-list">
        {open && <div className="box">kutu</div>}

        <button onClick={change}>{open ? "Gizle" : "Göster"}</button>
      </div> */}
      <div>
        {copied && "kopyalandı"}
        <button onClick={copy}>Kopyala</button>
      </div>
    </>
  );
}

export default App;
