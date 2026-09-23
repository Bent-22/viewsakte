
const stages = [
{
 id:"01", title:"Der Vermisstenfall", kicker:"AKTE 01 · AUSGANGSLAGE",
 intro:"Lena Palmer ist verschwunden. Noch bevor die Ermittler eine belastbare Rekonstruktion besitzen, verändert ein digitales Beweismittel die Lage.",
 evidence:`<div class="evidence-head"><span>VERMISSTENANZEIGE</span><span class="stamp">PRIORITÄT: HOCH</span></div>
 <p><b>Name:</b> Lena Palmer</p><p><b>Alter:</b> 16 Jahre</p><p><b>Status:</b> vermisst</p><p><b>Ermittlungsleitung:</b> BKA-Kommissarin Yasira Saad</p>
 <p>Die offizielle Ausgangslage: Lena ist verschwunden. Drei Tage später taucht ein verstörendes Video auf, in dem sie zu sehen ist. Das Video verbreitet sich sehr schnell.</p>`,
 question:"Welche Information ist für den Start der Ermittlungen am wichtigsten?",
 options:["Wir wissen bereits, wer die Täter sind.","Wir wissen, dass Lena verschwunden ist und ein Video aufgetaucht ist; die Echtheit und der Kontext des Videos müssen geprüft werden.","Die öffentliche Reaktion beweist, was passiert ist."],
 answer:1,
 feedback:"Richtig. Ein Ermittler muss Beobachtungen, gesicherte Tatsachen und Deutungen auseinanderhalten. Die Existenz eines Videos beweist noch nicht seine Entstehung oder seinen Kontext.",
 clue:"Die Akte wird um ein digitales Beweismittel erweitert."
},
{
 id:"02", title:"Das virale Video", kicker:"AKTE 02 · DIGITALES BEWEISMITTEL",
 intro:"Das Video zeigt Lena und drei junge schwarze Männer. Der Inhalt ist verstörend. Die öffentliche Deutung setzt fast sofort ein.",
 evidence:`<div class="evidence-head"><span>DIGITALES BEWEISMITTEL</span><span class="stamp">AUTHENTIZITÄT: UNGEKLÄRT</span></div>
 <p>Das Video zeigt Lena Palmer in einer sexualisierten Gewaltsituation mit drei jungen Männern. Es liegen zunächst keine gesicherten Informationen über Identität, Ort, Entstehung oder Bearbeitung des Videos vor.</p>
 <div class="note">Für die Unterrichtssimulation wird der Inhalt nur sachlich beschrieben. Es werden keine entsprechenden Bilder gezeigt.</div>`,
 question:"Welche Schlussfolgerung ist zu diesem Zeitpunkt NICHT gerechtfertigt?",
 options:["Lena ist im Video zu sehen.","Das Video muss ein authentisches Dokument des tatsächlichen Geschehens sein.","Die Identität der gezeigten Männer ist noch ungeklärt.","Die Herkunft und technische Entstehung des Videos müssen untersucht werden."],
 answer:1,
 feedback:"Genau hier setzt der Roman an: Sichtbarkeit wird sehr schnell mit Gewissheit verwechselt. Die Ermittlungsfrage lautet deshalb nicht nur „Was sehen wir?“, sondern auch „Woher kommt das, was wir sehen?“",
 clue:"Neue Akte: öffentliche Reaktionen."
},
{
 id:"03", title:"Die Öffentlichkeit urteilt", kicker:"AKTE 03 · MEDIENSPUREN",
 intro:"Aus dem Video werden innerhalb kürzester Zeit Behauptungen. Die Ermittler müssen nun nicht nur digitale Spuren, sondern auch die Dynamik der Öffentlichkeit beobachten.",
 evidence:`<div class="evidence-head"><span>SOCIAL-MEDIA-AUSZÜGE</span><span class="stamp">EIGENE GESTALTUNG</span></div>
 <p>„Das Video ist eindeutig. Was muss man denn noch sehen?“</p>
 <p>„Niemand weiß, ob das Video echt ist.“</p>
 <p>„Wer Lena etwas angetan hat, muss dafür bezahlen.“</p>
 <p>„Drei Männer. Schwarze Männer. Und die Polizei schaut wieder weg.“</p>`,
 question:"Welche Reihenfolge beschreibt am besten die Dynamik, die hier sichtbar wird?",
 options:["Beobachtung → Behauptung → Emotion/Deutung → Reaktion","Reaktion → Beweis → Beobachtung → Wahrheit","Wahrheit → Beobachtung → Beweis → Emotion"],
 answer:0,
 feedback:"Richtig. Die Simulation macht damit einen zentralen Mechanismus des Romans sichtbar: Aus einem Bild entstehen Deutungen; aus Deutungen entstehen Reaktionen. Die Reaktionen können real werden, obwohl die Ausgangsinformation unsicher ist.",
 clue:"Eine neue Gruppe tritt öffentlich auf."
},
{
 id:"04", title:"Bär und der Aktive Heimatschutz", kicker:"AKTE 04 · RADIKALISIERUNG",
 intro:"Ein Mann, der sich „Bär“ nennt, tritt mit einem Video an die Öffentlichkeit. Er kündigt den „Aktiven Heimatschutz“ an und behauptet, im Namen von Lena handeln zu wollen.",
 evidence:`<div class="evidence-head"><span>PERSONENAKTE</span><span class="stamp">BÄR</span></div>
 <p><b>Rolle:</b> Anführer / öffentlich auftretender Akteur</p><p><b>Organisation:</b> Aktiver Heimatschutz</p>
 <p>Die Gruppe gewinnt schnell Zulauf. Der Fall Lena wird damit von einem Vermisstenfall zu einem gesellschaftlich und politisch aufgeladenen Geschehen.</p>`,
 question:"Welche Aussage ist als Ermittlerhypothese am sinnvollsten?",
 options:["Bär ist automatisch der Täter, weil er laut auftritt.","Bär muss als möglicher Täter, Mitwisser oder politischer Profiteur geprüft werden; sein Auftreten allein beweist keine dieser Rollen.","Bär kann ausgeschlossen werden, weil er öffentlich spricht."],
 answer:1,
 feedback:"Richtig. Eine Ermittlungsakte muss mehrere Hypothesen zulassen. Öffentliche Lautstärke ist kein Beweis für Täterschaft.",
 clue:"Ein neuer Name taucht in den Ermittlungen auf: Justus Schöffler."
},
{
 id:"05", title:"Justus Schöffler", kicker:"AKTE 05 · PRIVATE SPUR",
 intro:"Befragungen im Umfeld von Lena ergeben eine wichtige private Verbindung.",
 evidence:`<div class="evidence-head"><span>PERSONENAKTE</span><span class="stamp">JUSTUS SCHÖFFLER</span></div>
 <p>Lena hatte eine geheime Beziehung mit Justus Schöffler, der elf Jahre älter ist als sie. Er verkauft in kleinerem Umfang Drogen.</p>
 <p>Justus gibt an, Lena habe am Samstag zu ihm kommen wollen, sei aber nicht bei ihm angekommen. Bei der Spurensicherung werden in seinem Haus Rückstände von Fentanyl gefunden.</p>`,
 question:"Was ist nach diesen Informationen die sauberste Ermittlungsposition?",
 options:["Justus ist zweifelsfrei Lenas Mörder.","Justus ist irrelevant, weil er behauptet, Lena sei nicht angekommen.","Justus ist eine wichtige Spur. Die Fentanyl-Spur und seine Beziehung zu Lena müssen geprüft werden, beweisen aber noch nicht den gesamten Fall."],
 answer:2,
 feedback:"Richtig. Die Akte wird jetzt interessanter: Ein Verdacht kann stark sein, ohne bereits eine vollständige Erklärung zu liefern.",
 clue:"Der Fall eskaliert öffentlich. Danach erscheint ein entscheidender Gegenhinweis."
},
{
 id:"06", title:"Das Kleid", kicker:"AKTE 06 · WIDERSPRUCH",
 intro:"Die Ermittlungen stoßen auf einen Widerspruch, der die bisherige Theorie erschüttert.",
 evidence:`<div class="evidence-head"><span>BEWEISMITTEL</span><span class="stamp">WIDERSPRUCH</span></div>
 <p>Das Kleid, das Lena im viralen Video trägt, wird unbeschädigt in ihrem Kleiderschrank gefunden.</p>
 <p>Damit entsteht ein Problem: Wenn das Kleid tatsächlich nach dem im Video dargestellten Geschehen wieder in Lenas Schrank gelangt sein soll, müsste eine bisher nicht erklärte Kette von Ereignissen stattgefunden haben.</p>`,
 question:"Welche neue Hypothese gewinnt dadurch deutlich an Bedeutung?",
 options:["Das Video könnte manipuliert oder künstlich erzeugt worden sein.","Lena kann gar nicht die Person im Video gewesen sein.","Der Fund des Kleides ist irrelevant."],
 answer:0,
 feedback:"Richtig. Der Kleid-Fund verschiebt die zentrale Ermittlungsfrage: Weg von „Wer sind die drei Männer?“ hin zu „Wie wurde dieses Video hergestellt?“",
 clue:"Technische Ermittlungen beginnen. Eine Firma namens AlmostReal rückt in den Fokus."
},
{
 id:"07", title:"AlmostReal", kicker:"AKTE 07 · TECHNISCHE SPUR",
 intro:"Yasira verfolgt die technische Möglichkeit eines künstlich erzeugten Videos.",
 evidence:`<div class="evidence-head"><span>TECHNISCHE SPUR</span><span class="stamp">ALMOSTREAL</span></div>
 <p>Ein Mitarbeiter von AlmostReal bestätigt unter der Hand, dass die Software grundsätzlich in der Lage wäre, ein solches künstlich erzeugtes Video zu produzieren.</p>
 <p>Er empfiehlt Yasira, nach Claus Messerschmidt zu suchen, einem ehemaligen Mitarbeiter.</p>`,
 question:"Welche Frage muss jetzt im Mittelpunkt stehen?",
 options:["Wer könnte technisch in der Lage gewesen sein, das Video zu erzeugen – und mit welchem Motiv?","Welche politische Partei profitiert davon?","Wie kann man die öffentliche Reaktion rückgängig machen?"],
 answer:0,
 feedback:"Richtig. Die technische Möglichkeit allein ist noch kein Täterbeweis. Jetzt müssen Fähigkeit, Zugang, Motiv und konkrete Spuren zusammengeführt werden.",
 clue:"Die Suche führt zu Claus Messerschmidt."
},
{
 id:"08", title:"Claus Messerschmidt", kicker:"AKTE 08 · DIE DIGITALE SPUR",
 intro:"Die Ermittlungen führen zu Claus Messerschmidt. Yasira findet schließlich seinen tatsächlichen Aufenthaltsort – und eine Spur, die die gesamte Geschichte neu ordnet.",
 evidence:`<div class="evidence-head"><span>HAUS / DIGITALE SPUR</span><span class="stamp">ZUGRIFF</span></div>
 <p>Messerschmidt wird tot aufgefunden. In seinem Haus stößt Yasira auf eine KI, mit der sie kommunizieren kann.</p>
 <p>Die KI beschreibt sich als User-Interface eines neuronalen Netzwerks zur Text-, Sprach- und Bilderkennung sowie zur Text-, Sprach- und Bildgenerierung.</p>
 <p>Sie erklärt, dass sie die Videos von Lena, Bär und dem Aktiven Heimatschutz erzeugt hat. Messerschmidt hatte ihr die Aufgabe gegeben, regelmäßig Inhalte zu erzeugen und zu veröffentlichen, die möglichst große Aufmerksamkeit erzeugen und über Werbung Geld einbringen.</p>`,
 question:"Was ist damit über das ursprüngliche Lena-Video geklärt?",
 options:["Es war ein echtes Video der Tat.","Es wurde durch die KI künstlich erzeugt.","Die KI hat Lena getötet."],
 answer:1,
 feedback:"Richtig. Das virale Video ist ein Fake. Aber damit ist der Vermisstenfall Lena noch nicht vollständig erklärt.",
 clue:"Letzte Ermittlungsfrage: Was geschah mit Lena wirklich?"
},
{
 id:"09", title:"Der Fall Lena Palmer", kicker:"AKTE 09 · ABSCHLUSS",
 intro:"Die digitale Täuschung ist aufgeklärt. Jetzt muss die Klasse zwischen gesicherten Fakten und Yasiras plausibler Rekonstruktion unterscheiden.",
 evidence:`<div class="evidence-head"><span>ABSCHLUSSVERMERK</span><span class="stamp">FALL NICHT VOLLSTÄNDIG BEWEISBAR</span></div>
 <p>Yasira entwickelt die plausible Erklärung, dass Lena am fraglichen Samstag doch bei Justus Schöffler war und dort an einer Fentanyl-Überdosis starb. Justus habe ihren Tod aus Angst vor einem Verfahren vertuscht.</p>
 <p>Diese Rekonstruktion erklärt die Fentanyl-Spur und den Widerspruch um das Kleid. Sie bleibt innerhalb der Handlung jedoch eine plausible Rekonstruktion und keine vollständig beweisbare gerichtliche Aufklärung.</p>
 <div class="note"><b>Entscheidend:</b> Obwohl das Lena-Video ein Fake ist, sind die gesellschaftlichen Folgen des Videos real.</div>`,
 question:"Wie lautet euer Abschlussurteil?",
 options:["Der gesamte Fall ist restlos aufgeklärt.","Die Video-Spur ist aufgeklärt; Lenas tatsächlicher Tod wird plausibel rekonstruiert, bleibt aber nicht vollständig beweisbar.","Es ist alles nur eine Simulation und daher ohne Bedeutung."],
 answer:1,
 feedback:"Fall abgeschlossen – aber nicht mit vollständiger Gewissheit. Genau diese Differenz ist für die Gestaltung zentral: Eine künstliche Darstellung kann reale politische, gesellschaftliche und persönliche Konsequenzen auslösen.",
 clue:"Die Abschlussakte wird freigeschaltet."
}
];

const finalText = `
<div class="reveal">
  <h3>🔓 ERMITTLUNGSERGEBNIS</h3>
  <p><b>Die Video-Spur:</b> Das virale Lena-Video wurde künstlich erzeugt. Die KI bei Claus Messerschmidt war an der Erstellung und Verbreitung beteiligt. Messerschmidt hatte ihr den Auftrag gegeben, regelmäßig möglichst aufmerksamkeitserzeugende Inhalte zu produzieren und damit Werbeeinnahmen zu generieren.</p>
  <p><b>Der Vermisstenfall:</b> Yasira rekonstruiert, dass Lena am fraglichen Samstag bei Justus Schöffler war und an einer Fentanyl-Überdosis starb. Justus soll ihren Tod aus Angst vor den Konsequenzen vertuscht haben. Diese Erklärung ist plausibel, aber nicht vollständig beweisbar.</p>
  <div class="final">Das Video war falsch.<br>Die Folgen waren echt.</div>
  <p>Damit ist der Fall nicht einfach „gelöst“. Die entscheidende Erkenntnis liegt darin, dass Menschen auf eine Darstellung reagieren können, bevor deren Wahrheit geklärt ist. In <em>Views</em> wird aus einer digitalen Fälschung eine reale gesellschaftliche Dynamik.</p>
</div>
`;

let current = Number(localStorage.getItem("views_stage") || 0);
let answers = JSON.parse(localStorage.getItem("views_answers") || "{}");

function startCase(){ document.getElementById("start").classList.remove("active"); document.getElementById("case").classList.add("active"); render(); }
function resetCase(){ if(confirm("Alle Ermittlungsfortschritte löschen?")){localStorage.removeItem("views_stage");localStorage.removeItem("views_answers");current=0;answers={};render();}}
function renderNav(){
  const nav=document.getElementById("caseNav"); nav.innerHTML="";
  stages.forEach((s,i)=>{
    const b=document.createElement("button");
    b.textContent=(answers[i] ? "✓ " : (i<=current ? "▸ " : "🔒 "))+s.id+" · "+s.title;
    b.className=(i<=current?"unlocked ":"")+(i<current?"done ":"")+(i===current?"current":"");
    b.disabled=i>current;
    b.onclick=()=>{current=i;render();};
    nav.appendChild(b);
  });
}
function updateProgress(){
  document.getElementById("progressText").textContent=`${current} / ${stages.length-1} HINWEISE`;
  document.getElementById("progressBar").style.width=`${(current/(stages.length-1))*100}%`;
}
function render(){
  renderNav(); updateProgress();
  const s=stages[current];
  const stage=document.getElementById("stage");
  stage.innerHTML=`<div class="stage">
    <div class="stage-kicker">${s.kicker}</div>
    <h2>${s.title}</h2>
    <p class="intro">${s.intro}</p>
    ${s.evidence}
    <div class="question">
      <h3>${s.question}</h3>
      <div class="options">${s.options.map((o,i)=>`<label class="option"><input type="radio" name="answer" value="${i}" ${answers[current]===i?"checked":""}> <span>${o}</span></label>`).join("")}</div>
      <button class="submit" onclick="checkAnswer()">AUSWERTEN</button>
      <div id="feedback"></div>
    </div>
    <div id="nextArea"></div>
  </div>`;
  if(answers[current]!==undefined) showFeedback(answers[current]===s.answer);
  if(current===stages.length-1 && answers[current]===s.answer){
    stage.innerHTML += finalText;
  }
}
function checkAnswer(){
  const picked=document.querySelector('input[name="answer"]:checked');
  if(!picked){toast("Bitte erst eine Antwort auswählen.");return;}
  const val=Number(picked.value); answers[current]=val; localStorage.setItem("views_answers",JSON.stringify(answers));
  const correct=val===stages[current].answer;
  showFeedback(correct);
  if(correct){
    if(current<stages.length-1){current++;localStorage.setItem("views_stage",String(current));setTimeout(render,850);}
    else {localStorage.setItem("views_stage",String(current));render();}
  } else {
    toast("Hypothese nicht bestätigt. Prüfe die Akte noch einmal.");
  }
}
function showFeedback(correct){
  const f=document.getElementById("feedback"); if(!f)return;
  f.className="feedback "+(correct?"ok":"bad");
  f.innerHTML=correct?`<b>HINWEIS GESICHERT ✓</b><br>${stages[current].feedback}`:`<b>NOCH NICHT.</b><br>Die Antwort passt nicht zur bisherigen Aktenlage. Lies die Beweise noch einmal und versuche es erneut.`;
}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);}
document.addEventListener("DOMContentLoaded",()=>{ if(localStorage.getItem("views_stage")!==null){document.getElementById("start").classList.remove("active");document.getElementById("case").classList.add("active");render();}});
