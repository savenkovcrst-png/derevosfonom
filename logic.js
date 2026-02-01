import { stuckPipe } from './data/stuck_pipe.js';
import { pipeFailure } from './data/pipe_failure.js';
import { circulationLoss } from './data/circulation_loss.js';
import { kicks } from './data/kicks.js';
import { collapses } from './data/collapses.js';
import { motors } from './data/motors.js';
import { toolFailure } from './data/tool_failure.js';
import { miscComplications } from './data/misc.js';
const chapters = {stuckPipe, pipeFailure, circulationLoss, kicks, collapses, motors, toolFailure, miscComplications};
const select = document.getElementById('chapterSelect');
const container = document.getElementById('treeContainer');
select.addEventListener('change', () => {
  const val = select.value;
  container.innerHTML = '';
  if (!val) return;
  renderTree(chapters[val]);
});
function renderTree(chapter) {
  chapter.subtypes.forEach(sub => {
    const subtypeDiv = document.createElement('div');
    subtypeDiv.className = 'node';
    const title = document.createElement('h2');
    title.textContent = sub.name;
    subtypeDiv.appendChild(title);
    sub.stages.forEach(stage => {
      const stageDiv = document.createElement('div');
      stageDiv.className = 'node';
      const stageName = document.createElement('div');
      stageName.className = 'stage';
      stageName.textContent = stage.stage;
      const desc = document.createElement('div');
      desc.className = 'description';
      desc.textContent = stage.description;
      const tools = document.createElement('div');
      tools.className = 'tools';
      tools.textContent = stage.tools ? "Инструменты: " + stage.tools.join(', ') : '';
      stageDiv.appendChild(stageName);
      stageDiv.appendChild(desc);
      stageDiv.appendChild(tools);
      subtypeDiv.appendChild(stageDiv);
    });
    container.appendChild(subtypeDiv);
  });
}