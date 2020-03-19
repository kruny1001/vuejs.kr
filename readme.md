yarn doc:dev


<mermaid>
gantt
  title Gantt Chart ESS 개발
  dateFormat  YYYY-MM-DD
  section ESS Util
  R Implementation : a1, {{start}}, 30d
  Evaluation: after a1  , 20d
</mermaid>

<mermaid>
sequenceDiagram
  Alice ->> Bob: Hello Bob, how are you?
  Bob-->>John: How about you John?
  Bob--x Alice: I am good thanks!
  Bob-x John: I am good thanks!
  Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.
  Bob-->Alice: Checking with John...
  Alice->John: Yes... John, how are you?
</mermaid>

<mermaid>
graph TD
  A[ESS] --> B(Utility)
  A[ESS] --> D(Prediction)
  A[ESS] --> E(Model)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
  C -->|Four| F[Mac]
</mermaid>