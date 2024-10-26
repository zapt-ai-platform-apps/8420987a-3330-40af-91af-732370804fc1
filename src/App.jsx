import { createSignal } from 'solid-js';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [code, setCode] = createSignal('');

  return (
    <div class="min-h-screen flex flex-col text-gray-800">
      <header class="flex items-center justify-between p-4 bg-purple-600 text-white">
        <h1 class="text-2xl font-bold">تطبيق إنشاء صفحات HTML عربي</h1>
      </header>
      <main class="flex flex-1 overflow-hidden flex-col md:flex-row">
        <Editor code={code()} onCodeChange={setCode} />
        <Preview code={code()} />
      </main>
    </div>
  );
}

export default App;