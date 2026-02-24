import './Materi.css';
import ConditionalRendering from './components/ConditionalRendering';
import ListAndKeys from './components/ListAndKeys';
import UseEffectExamples from './components/UseEffectExamples';

function Materi() {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <h1>Hasil Praktik Materi</h1>
        <p>Membuktikan konsep teori dari README.md ke dalam bentuk nyata.</p>
      </header>

      <div className="materi-layout">
        <ConditionalRendering />
        <ListAndKeys />
        <UseEffectExamples />
      </div>
    </div>
  );
}

export default Materi;