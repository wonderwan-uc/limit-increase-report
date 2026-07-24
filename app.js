const reportPeriod = "2026-07-01 ~ 2026-07-15";

const marketNotes = {
  ID: "ID will be the first region make revamp, will check data later, if CR raise well, we will migrate this revamp to other region.",
  MY: "We already developed cross-product sharing, but not roll out yet, we will remove 2W from sharing then roll out sharing.",
  PH: "PH just raised FRF to make enhancement to improve CR, we will check in late Q3.",
  VN: "VN's whitelist volume is very low, so we do not have enough sample to check CR.",
  TH: "TH just added whitelist in June, traffic is increasing. TH's FE is similar to other regions but data is much better (maybe bankstatement is easier to get in TH).",
};

const productDatasets = {
  SPL: [
    {
      market: "ID",
      viewEntrance: 3525131,
      entryClick: 282071,
      enterUploadPage: 55329,
      submitDoc: 1425,
      opsScreening: 1082,
      opsApproved: 285,
      opsRejected: 797,
      modelScreening: 343,
      modelPassed: 0,
      modelRejected: 343,
      riskPolicy: 285,
      riskApproved: 147,
      riskRejected: 138,
      limitIncreaseSuccess: 147,
    },
    {
      market: "MY",
      viewEntrance: 3960809,
      entryClick: 85108,
      enterUploadPage: 81940,
      submitDoc: 2113,
      opsScreening: 2113,
      opsApproved: 1609,
      opsRejected: 504,
      modelScreening: 0,
      modelPassed: 0,
      modelRejected: 0,
      riskPolicy: 1609,
      riskApproved: 1020,
      riskRejected: 589,
      limitIncreaseSuccess: 1020,
    },
    {
      market: "PH",
      viewEntrance: 42982,
      entryClick: 2432,
      enterUploadPage: 2385,
      submitDoc: 275,
      opsScreening: 127,
      opsApproved: 72,
      opsRejected: 55,
      modelScreening: 148,
      modelPassed: 0,
      modelRejected: 148,
      riskPolicy: 72,
      riskApproved: 32,
      riskRejected: 40,
      limitIncreaseSuccess: 32,
    },
    {
      market: "VN",
      viewEntrance: 85586,
      entryClick: 3440,
      enterUploadPage: 28095,
      submitDoc: 385,
      opsScreening: 385,
      opsApproved: 171,
      opsRejected: 214,
      modelScreening: 0,
      modelPassed: 0,
      modelRejected: 0,
      riskPolicy: 145,
      riskApproved: 97,
      riskRejected: 48,
      limitIncreaseSuccess: 97,
    },
    {
      market: "TH",
      viewEntrance: 5156678,
      entryClick: 482681,
      enterUploadPage: 441986,
      submitDoc: 48344,
      opsScreening: 37761,
      opsApproved: 35695,
      opsRejected: 2066,
      modelScreening: 10583,
      modelPassed: 7457,
      modelRejected: 3126,
      riskPolicy: 43152,
      riskApproved: 43009,
      riskRejected: 143,
      limitIncreaseSuccess: 43009,
    },
  ],
  BCL: [
    {
      market: "ID",
      viewEntrance: null,
      entryClick: null,
      enterUploadPage: null,
      submitDoc: 2208,
      opsScreening: 1677,
      opsApproved: 358,
      opsRejected: 1319,
      modelScreening: 531,
      modelPassed: 0,
      modelRejected: 531,
      riskPolicy: 358,
      riskApproved: 152,
      riskRejected: 206,
      limitIncreaseSuccess: 152,
      noteOverride: "View / click / upload data error, BI is checking.",
    },
    {
      market: "MY",
      viewEntrance: null,
      entryClick: null,
      enterUploadPage: null,
      submitDoc: 3,
      opsScreening: 3,
      opsApproved: 2,
      opsRejected: 1,
      modelScreening: 0,
      modelPassed: 0,
      modelRejected: 0,
      riskPolicy: 2,
      riskApproved: 0,
      riskRejected: 2,
      limitIncreaseSuccess: 0,
    },
    {
      market: "PH",
      viewEntrance: null,
      entryClick: null,
      enterUploadPage: null,
      submitDoc: 658,
      opsScreening: 338,
      opsApproved: 231,
      opsRejected: 107,
      modelScreening: 320,
      modelPassed: 0,
      modelRejected: 320,
      riskPolicy: 231,
      riskApproved: 113,
      riskRejected: 118,
      limitIncreaseSuccess: 113,
    },
    {
      market: "VN",
      viewEntrance: null,
      entryClick: null,
      enterUploadPage: null,
      submitDoc: 511,
      opsScreening: 511,
      opsApproved: 39,
      opsRejected: 472,
      modelScreening: 0,
      modelPassed: 0,
      modelRejected: 0,
      riskPolicy: 39,
      riskApproved: 26,
      riskRejected: 13,
      limitIncreaseSuccess: 26,
    },
    {
      market: "TH",
      viewEntrance: null,
      entryClick: null,
      enterUploadPage: null,
      submitDoc: 23662,
      opsScreening: 19602,
      opsApproved: 18543,
      opsRejected: 1059,
      modelScreening: 4060,
      modelPassed: 2464,
      modelRejected: 1596,
      riskPolicy: 21007,
      riskApproved: 21005,
      riskRejected: 2,
      limitIncreaseSuccess: 21005,
    },
  ],
  SCL: [
    { market: "ID", invited: 341751, viewed: 63712, started: 37732, submitted: 19921, approved: 9542 },
    { market: "MY", invited: 21001, viewed: 8833, started: 4864, submitted: 2819, approved: 1935 },
    { market: "PH", invited: 13463, viewed: 7834, started: 4736, submitted: 2850, approved: 1293 },
    { market: "VN", invited: 594, viewed: 495, started: 288, submitted: 61, approved: 7 },
    { market: "TH", invited: 22594, viewed: 3461, started: 1729, submitted: 797, approved: 222 },
  ],
};

const productDefinitions = {
  SPL: {
    label: "SPL",
    titleLabel: "SPL Funnel",
    steps: [
      { key: "viewEntrance", stepLabel: "STEP 1", label: "View Entrance" },
      { key: "entryClick", stepLabel: "STEP 2", label: "Entry Click" },
      { key: "enterUploadPage", stepLabel: "STEP 3", label: "Upload Page Visit" },
      { key: "submitDoc", stepLabel: "STEP 4", label: "Document Submitted" },
      { key: "opsScreening", stepLabel: "STEP 5.1", label: "Ops Screening" },
      { key: "modelScreening", stepLabel: "STEP 5.2", label: "Model Screening" },
      { key: "riskPolicy", stepLabel: "STEP 6", label: "Risk Policy" },
      { key: "limitIncreaseSuccess", stepLabel: "STEP 7", label: "Limit Increase Success" },
    ],
    kpis: [
      { label: "View -> Click CR", delta: "#2 / #1", digits: 2, calc: (item) => ratio(item.entryClick, item.viewEntrance) },
      { label: "Click -> Upload Page CR", delta: "#3 / #2", digits: 2, calc: (item) => ratio(item.enterUploadPage, item.entryClick) },
      { label: "Doc Submit CR", delta: "#4 / #3", digits: 2, calc: (item) => ratio(item.submitDoc, item.enterUploadPage) },
      { label: "Ops Approval Rate", delta: "#5.1 pass / #5.1", digits: 2, calc: (item) => ratio(item.opsApproved, item.opsScreening) },
      { label: "Model Pass Rate", delta: "#5.2 pass / #5.2", digits: 2, calc: (item) => ratio(item.modelPassed, item.modelScreening) },
      { label: "UW Approval Rate", delta: "#7 / #6", digits: 2, calc: (item) => ratio(item.limitIncreaseSuccess, item.riskPolicy) },
    ],
    bars: [
      { label: "View -> Click", leftLabel: "View", leftKey: "viewEntrance", rightLabel: "Click", rightKey: "entryClick" },
      { label: "Click -> Upload Page", leftLabel: "Click", leftKey: "entryClick", rightLabel: "Visit", rightKey: "enterUploadPage" },
      { label: "Upload Page -> Submit", leftLabel: "Visit", leftKey: "enterUploadPage", rightLabel: "Submit", rightKey: "submitDoc" },
      { label: "Submit -> Ops Screening", leftLabel: "Submit", leftKey: "submitDoc", rightLabel: "Ops", rightKey: "opsScreening" },
      { label: "Submit -> Model Screening", leftLabel: "Submit", leftKey: "submitDoc", rightLabel: "Model", rightKey: "modelScreening" },
      { label: "Ops Screening -> Pass", leftLabel: "Ops", leftKey: "opsScreening", rightLabel: "Pass", rightKey: "opsApproved" },
      { label: "Model Screening -> Pass", leftLabel: "Model", leftKey: "modelScreening", rightLabel: "Pass", rightKey: "modelPassed" },
      { label: "Risk Policy -> Success", leftLabel: "Risk", leftKey: "riskPolicy", rightLabel: "Success", rightKey: "limitIncreaseSuccess" },
      { label: "View -> Success", leftLabel: "View", leftKey: "viewEntrance", rightLabel: "Success", rightKey: "limitIncreaseSuccess", digits: 3 },
    ],
    tableColumns: [
      { key: "market", label: "Market", type: "text" },
      { key: "viewEntrance", label: "#1 View Entrance" },
      { key: "entryClick", label: "#2 Click Entrance" },
      { key: "enterUploadPage", label: "#3 Enter Upload Page" },
      { key: "submitDoc", label: "#4 Submit Doc" },
      { key: "opsScreening", label: "#5.1 Ops Screening" },
      { key: "modelScreening", label: "#5.2 Model Screening" },
      { key: "riskPolicy", label: "#6 Risk Policy" },
      { key: "limitIncreaseSuccess", label: "#7 Limit Increase Success" },
      { key: "viewToClickCr", label: "View -> Click CR", type: "percent", digits: 2, calc: (item) => ratio(item.entryClick, item.viewEntrance) },
      { key: "clickToUploadCr", label: "Click -> Upload CR", type: "percent", digits: 2, calc: (item) => ratio(item.enterUploadPage, item.entryClick) },
      { key: "submitCr", label: "Submit CR", type: "percent", digits: 2, calc: (item) => ratio(item.submitDoc, item.enterUploadPage) },
      { key: "opsApprovalRate", label: "Ops Approval Rate", type: "percent", digits: 2, calc: (item) => ratio(item.opsApproved, item.opsScreening) },
      { key: "modelPassRate", label: "Model Pass Rate", type: "percent", digits: 2, calc: (item) => ratio(item.modelPassed, item.modelScreening) },
      { key: "uwApprovalRate", label: "UW Approval Rate", type: "percent", digits: 2, calc: (item) => ratio(item.limitIncreaseSuccess, item.riskPolicy) },
      { key: "e2eCr", label: "E2E CR", type: "percent", digits: 3, calc: (item) => ratio(item.limitIncreaseSuccess, item.viewEntrance) },
      { key: "note", label: "Note", type: "note" },
    ],
    chartSteps: [
      { key: "viewEntrance", label: "Step 1", fullLabel: "View Entrance" },
      { key: "entryClick", label: "Step 2", fullLabel: "Entry Click" },
      { key: "enterUploadPage", label: "Step 3", fullLabel: "Upload Page" },
      { key: "submitDoc", label: "Step 4", fullLabel: "Submit Doc" },
      { key: "opsScreening", label: "Step 5.1", fullLabel: "Ops Screening" },
      { key: "modelScreening", label: "Step 5.2", fullLabel: "Model Screening" },
      { key: "riskPolicy", label: "Step 6", fullLabel: "Risk Policy" },
      { key: "limitIncreaseSuccess", label: "Step 7", fullLabel: "Success" },
    ],
  },
  BCL: {
    label: "BCL",
    titleLabel: "BCL Funnel",
    steps: [
      { key: "submitDoc", stepLabel: "STEP 4", label: "Document Submitted" },
      { key: "opsScreening", stepLabel: "STEP 5.1", label: "Ops Screening" },
      { key: "modelScreening", stepLabel: "STEP 5.2", label: "Model Screening" },
      { key: "riskPolicy", stepLabel: "STEP 6", label: "Risk Policy" },
      { key: "limitIncreaseSuccess", stepLabel: "STEP 7", label: "Limit Increase Success" },
    ],
    kpis: [
      { label: "Submit -> Ops Screening", delta: "#5.1 / #4", digits: 2, calc: (item) => ratio(item.opsScreening, item.submitDoc) },
      { label: "Submit -> Model Screening", delta: "#5.2 / #4", digits: 2, calc: (item) => ratio(item.modelScreening, item.submitDoc) },
      { label: "Ops Approval Rate", delta: "#5.1 pass / #5.1", digits: 2, calc: (item) => ratio(item.opsApproved, item.opsScreening) },
      { label: "Model Pass Rate", delta: "#5.2 pass / #5.2", digits: 2, calc: (item) => ratio(item.modelPassed, item.modelScreening) },
      { label: "UW Approval Rate", delta: "#7 / #6", digits: 2, calc: (item) => ratio(item.limitIncreaseSuccess, item.riskPolicy) },
    ],
    bars: [
      { label: "Submit -> Ops Screening", leftLabel: "Submit", leftKey: "submitDoc", rightLabel: "Ops", rightKey: "opsScreening" },
      { label: "Submit -> Model Screening", leftLabel: "Submit", leftKey: "submitDoc", rightLabel: "Model", rightKey: "modelScreening" },
      { label: "Ops Screening -> Pass", leftLabel: "Ops", leftKey: "opsScreening", rightLabel: "Pass", rightKey: "opsApproved" },
      { label: "Model Screening -> Pass", leftLabel: "Model", leftKey: "modelScreening", rightLabel: "Pass", rightKey: "modelPassed" },
      { label: "Risk Policy -> Success", leftLabel: "Risk", leftKey: "riskPolicy", rightLabel: "Success", rightKey: "limitIncreaseSuccess" },
    ],
    tableColumns: [
      { key: "market", label: "Market", type: "text" },
      { key: "submitDoc", label: "#4 Submit Doc" },
      { key: "opsScreening", label: "#5.1 Ops Screening" },
      { key: "modelScreening", label: "#5.2 Model Screening" },
      { key: "riskPolicy", label: "#6 Risk Policy" },
      { key: "limitIncreaseSuccess", label: "#7 Limit Increase Success" },
      { key: "submitToOpsCr", label: "Submit -> Ops CR", type: "percent", digits: 2, calc: (item) => ratio(item.opsScreening, item.submitDoc) },
      { key: "submitToModelCr", label: "Submit -> Model CR", type: "percent", digits: 2, calc: (item) => ratio(item.modelScreening, item.submitDoc) },
      { key: "opsApprovalRate", label: "Ops Approval Rate", type: "percent", digits: 2, calc: (item) => ratio(item.opsApproved, item.opsScreening) },
      { key: "modelPassRate", label: "Model Pass Rate", type: "percent", digits: 2, calc: (item) => ratio(item.modelPassed, item.modelScreening) },
      { key: "uwApprovalRate", label: "UW Approval Rate", type: "percent", digits: 2, calc: (item) => ratio(item.limitIncreaseSuccess, item.riskPolicy) },
      { key: "note", label: "Note", type: "note" },
    ],
    chartSteps: [
      { key: "submitDoc", label: "Step 4", fullLabel: "Submit Doc" },
      { key: "opsScreening", label: "Step 5.1", fullLabel: "Ops Screening" },
      { key: "modelScreening", label: "Step 5.2", fullLabel: "Model Screening" },
      { key: "riskPolicy", label: "Step 6", fullLabel: "Risk Policy" },
      { key: "limitIncreaseSuccess", label: "Step 7", fullLabel: "Success" },
    ],
  },
  SCL: {
    label: "SCL",
    titleLabel: "SCL Funnel",
    steps: [
      { key: "invited", stepLabel: "STEP 1", label: "Invited" },
      { key: "viewed", stepLabel: "STEP 2", label: "Viewed" },
      { key: "started", stepLabel: "STEP 3", label: "Started" },
      { key: "submitted", stepLabel: "STEP 4", label: "Submitted" },
      { key: "approved", stepLabel: "STEP 5", label: "Approved" },
    ],
    kpis: [
      { label: "Invite -> View CR", delta: "#2 / #1", digits: 2, calc: (item) => ratio(item.viewed, item.invited) },
      { label: "View -> Start CR", delta: "#3 / #2", digits: 2, calc: (item) => ratio(item.started, item.viewed) },
      { label: "Start -> Submit CR", delta: "#4 / #3", digits: 2, calc: (item) => ratio(item.submitted, item.started) },
      { label: "Approval Rate", delta: "#5 / #4", digits: 2, calc: (item) => ratio(item.approved, item.submitted) },
      { label: "E2E CR", delta: "#5 / #1", digits: 3, calc: (item) => ratio(item.approved, item.invited) },
    ],
    bars: [
      { label: "Invited -> Viewed", leftLabel: "Invited", leftKey: "invited", rightLabel: "Viewed", rightKey: "viewed" },
      { label: "Viewed -> Started", leftLabel: "Viewed", leftKey: "viewed", rightLabel: "Started", rightKey: "started" },
      { label: "Started -> Submitted", leftLabel: "Started", leftKey: "started", rightLabel: "Submitted", rightKey: "submitted" },
      { label: "Submitted -> Approved", leftLabel: "Submitted", leftKey: "submitted", rightLabel: "Approved", rightKey: "approved" },
      { label: "Invited -> Approved", leftLabel: "Invited", leftKey: "invited", rightLabel: "Approved", rightKey: "approved", digits: 3 },
    ],
    tableColumns: [
      { key: "market", label: "Market", type: "text" },
      { key: "invited", label: "#1 Invited" },
      { key: "viewed", label: "#2 Viewed" },
      { key: "started", label: "#3 Started" },
      { key: "submitted", label: "#4 Submitted" },
      { key: "approved", label: "#5 Approved" },
      { key: "inviteToViewCr", label: "Invite -> View CR", type: "percent", digits: 2, calc: (item) => ratio(item.viewed, item.invited) },
      { key: "viewToStartCr", label: "View -> Start CR", type: "percent", digits: 2, calc: (item) => ratio(item.started, item.viewed) },
      { key: "startToSubmitCr", label: "Start -> Submit CR", type: "percent", digits: 2, calc: (item) => ratio(item.submitted, item.started) },
      { key: "approvalRate", label: "Approval Rate", type: "percent", digits: 2, calc: (item) => ratio(item.approved, item.submitted) },
      { key: "e2eCr", label: "E2E CR", type: "percent", digits: 3, calc: (item) => ratio(item.approved, item.invited) },
      { key: "note", label: "Note", type: "note" },
    ],
    chartSteps: [
      { key: "invited", label: "Step 1", fullLabel: "Invited" },
      { key: "viewed", label: "Step 2", fullLabel: "Viewed" },
      { key: "started", label: "Step 3", fullLabel: "Started" },
      { key: "submitted", label: "Step 4", fullLabel: "Submitted" },
      { key: "approved", label: "Step 5", fullLabel: "Approved" },
    ],
  },
};

const stepDetailDefinitions = {
  viewEntrance: {
    summary: "Users first need to discover the limit increase entry before any conversion can happen.",
    formula: "Tracked as #1 View Entrance.",
    visual: { src: "./assets/entry-view-spaylater.png", alt: "SPayLater entry surfaces for higher limit discovery" },
  },
  entryClick: {
    summary: "This step reflects whether the entry copy and placement are attractive enough to trigger intent.",
    formula: "Tracked as #2 Click Entrance.",
  },
  enterUploadPage: {
    summary: "This step shows whether users continue after clicking and successfully land on the upload experience.",
    formula: "Tracked as #3 Enter Upload Page.",
    visual: { src: "./assets/upload-page-limit-form.png", alt: "Upload page for higher credit limit documents" },
  },
  submitDoc: {
    summary: "This is the first strong commitment point where the user actually submits documents into the flow.",
    formula: "Tracked as #4 Submit Doc.",
    visual: { src: "./assets/document-submitted-under-review.png", alt: "Document submitted and under review state" },
  },
  opsScreening: {
    summary: "Operations screening validates submitted documents before they can move deeper into the review flow.",
    formula: "Tracked as #5.1 Ops Screening.",
    visual: { src: "./assets/screening-passed-review-console.png", alt: "Operations screening review console", compact: true },
  },
  modelScreening: {
    summary: "Model screening automatically filters document quality and eligibility after submission.",
    formula: "Tracked as #5.2 Model Screening.",
  },
  riskPolicy: {
    summary: "Risk policy review decides whether the screened cases are eligible for final limit increase approval.",
    formula: "Tracked as #6 Risk Policy.",
  },
  limitIncreaseSuccess: {
    summary: "This is the final approved outcome and the end-to-end business result for SPL and BCL.",
    formula: "Tracked as #7 Limit Increase Success.",
    visualType: "success-distribution",
  },
  invited: {
    summary: "SCL starts from the invited population rather than an upload funnel entrance.",
    formula: "Tracked as #1 Invited.",
  },
  viewed: {
    summary: "This step shows how many invited users actually viewed the SCL offer or prompt.",
    formula: "Tracked as #2 Viewed.",
  },
  started: {
    summary: "This step shows how many users began the SCL flow after viewing it.",
    formula: "Tracked as #3 Started.",
  },
  submitted: {
    summary: "This step shows how many started users completed the SCL submission.",
    formula: "Tracked as #4 Submitted.",
  },
  approved: {
    summary: "This is the final approved outcome for the SCL flow.",
    formula: "Tracked as #5 Approved.",
  },
};

const successDistribution = [
  {
    market: "ID",
    color: "#ffb35c",
    temp: [
      { range: "(0,100]", value: 90, display: "90%+" },
      { range: "(100,200]", value: 10, display: "10%" },
    ],
    perm: [],
  },
  {
    market: "MY",
    color: "#ffd166",
    temp: [
      { range: "(40,60]", value: 5, display: "5%" },
      { range: "(60,80]", value: 10, display: "10%" },
      { range: "(100,500]", value: 50, display: "50%" },
    ],
    perm: [
      { range: "(100,200]", value: 4, display: "4%" },
      { range: "(200,300]", value: 4, display: "4%" },
      { range: "(300,400]", value: 3, display: "3%" },
      { range: "(400,500]", value: 3, display: "3%" },
      { range: "(500,600]", value: 6, display: "6%" },
      { range: "(600,700]", value: 15, display: "15%" },
    ],
  },
  {
    market: "TH",
    color: "#8ecae6",
    temp: [{ range: "(60,80]", value: 13, display: "13%" }],
    perm: [
      { range: "(0,100]", value: 80, display: "80%" },
      { range: "(100,200]", value: 2, display: "2%" },
      { range: "(200,300]", value: 2, display: "2%" },
      { range: "(300,400]", value: 2, display: "2%" },
      { range: "(400,500]", value: 1, display: "1%" },
    ],
  },
];

const rejectReasonDistribution = [
  {
    market: "ID",
    color: "#ffb35c",
    note: "",
    reasons: [
      { label: "Unofficial Doc", value: 42 },
      { label: "Mismatch Doc Type", value: 8 },
      { label: "Not Recent Doc", value: 8 },
      { label: "Mismatch Name/NRIC/ID", value: 6 },
      { label: "Low Quality Doc", value: 2 },
      { label: "Password protected", value: 1 },
      { label: "Hard Reject", value: 1 },
      { label: "Insufficient Doc", value: 0 },
      { label: "Doc Amount Not Match", value: 0 },
      { label: "Others", value: 0 },
    ],
  },
  {
    market: "MY",
    color: "#ffd166",
    note: "",
    reasons: [
      { label: "Insufficient Doc", value: 51 },
      { label: "Unofficial Doc", value: 16 },
      { label: "Not Recent Doc", value: 14 },
      { label: "Doc Amount Not Match", value: 12 },
      { label: "Password protected", value: 10 },
      { label: "Mismatch Doc Type", value: 9 },
      { label: "Mismatch Name/NRIC/ID", value: 5 },
      { label: "Low Quality Doc", value: 2 },
      { label: "Hard Reject", value: 1 },
      { label: "Others", value: 0 },
    ],
  },
  {
    market: "PH",
    color: "#2ec4b6",
    note: "",
    reasons: [
      { label: "Others", value: 4 },
      { label: "Not Recent Doc", value: 2 },
      { label: "Insufficient Doc", value: 1 },
      { label: "Unofficial Doc", value: 1 },
      { label: "Mismatch Doc Type", value: 1 },
      { label: "Password protected", value: 1 },
      { label: "Mismatch Name/NRIC/ID", value: 0 },
      { label: "Low Quality Doc", value: 0 },
      { label: "Hard Reject", value: 0 },
      { label: "Doc Amount Not Match", value: 0 },
    ],
  },
  {
    market: "VN",
    color: "#6a5acd",
    note: "Sample too small",
    reasons: [],
  },
  {
    market: "TH",
    color: "#1982c4",
    note: "",
    reasons: [
      { label: "Mismatch Doc Type", value: 94 },
      { label: "Mismatch Name/NRIC/ID", value: 77 },
      { label: "Not Recent Doc", value: 37 },
      { label: "Unofficial Doc", value: 2 },
      { label: "Low Quality Doc", value: 1 },
      { label: "Password protected", value: 1 },
      { label: "Insufficient Doc", value: 0 },
      { label: "Hard Reject", value: 0 },
      { label: "Doc Amount Not Match", value: 0 },
      { label: "Others", value: 0 },
    ],
  },
];

const whitelistOtaUpdatedAt = "2026-07-24";

const whitelistOtaData = [
  { track: "SPL", ID: "Whitelist 3M", MY: "Whitelist 900k", PH: "Whitelist 100k", TH: "OTA", VN: "Whitelist 18k" },
  { track: "BCL", ID: "Whitelist 700k", MY: "Not used", PH: "Whitelist 100k", TH: "OTA", VN: "Whitelist 18k" },
  { track: "SCL", ID: "Whitelist 341,751", MY: "Whitelist 21,001", PH: "Whitelist 13,463", TH: "Whitelist 22,594", VN: "Whitelist 594" },
];

const uiPanels = [
  {
    key: "old",
    label: "Old UI",
    images: [{ type: "image", src: "./assets/old-ui.png", alt: "Old UI main screen" }],
    highlights: [
      {
        title: "Batch Upload",
        body: "Users have to upload multiple document type in one time. It is hard for them to get so many documents in a short time.",
      },
      {
        title: "Unclear Application Progress",
        body: "User need enter result page to know the detail, which is not intuitive.",
      },
      {
        title: "Data Collection",
        body: "Collect payroll frequency and salary to verify document data.",
      },
    ],
  },
  {
    key: "new",
    label: "New UI",
    images: [
      { type: "image", src: "./assets/new-ui.png", alt: "New UI limit increment screen" },
      { type: "image", src: "./assets/new-ui-upload-progress.png", alt: "New UI upload payslip progress screen" },
    ],
    highlights: [
      {
        title: "Submit one by one",
        body: "We change to allow user submit one by one to get limit increase.",
      },
      {
        title: "Intuitive Application Status Display",
        body: "We will display different apply status on the homepage, user can know the detail.",
      },
      {
        title: "Optional Desired Limit Collection",
        body: "Collect user desired limit to know user's real request, which will be considered by risk policy team.",
      },
    ],
  },
];

const featureProgressGroups = [
  {
    stage: "Live Testing",
    items: [
      {
        eta: "July v1",
        feature: "[MY][SPL/BCL/TL/2W] remove 2W from sharing",
      },
    ],
  },
  {
    stage: "UAT",
    items: [],
  },
  {
    stage: "Under Dev",
    items: [
      {
        eta: "July v2",
        feature: "[ID][SPL/BCL] CLI Revamp",
      },
      {
        eta: "TBD",
        feature: "[MY][SPL/BCL/TL/2W] Income Streamline",
      },
      {
        eta: "July v1",
        feature: "Entrance Data tracking point fix",
      },
    ],
  },
  {
    stage: "PRD Preparing",
    items: [
      {
        eta: "Aug v1",
        feature: "[ID][SCL] Enhancement",
      },
      {
        eta: "Aug v2",
        feature: "[PH][SPL/BCL] CLI Revamp + QC model",
      },
      {
        eta: "Sep",
        feature: "[SG][SPL] CLI",
      },
    ],
  },
];

const chartSeries = [
  { key: "ID", color: "#ff6b35" },
  { key: "MY", color: "#ff9f1c" },
  { key: "PH", color: "#2ec4b6" },
  { key: "VN", color: "#6a5acd" },
  { key: "TH", color: "#1982c4" },
];

const refs = {
  daySelect: document.querySelector("#daySelect"),
  productSelect: document.querySelector("#productSelect"),
  stepRail: document.querySelector("#stepRail"),
  selectedDayTitle: document.querySelector("#selectedDayTitle"),
  kpiGrid: document.querySelector("#kpiGrid"),
  funnelBars: document.querySelector("#funnelBars"),
  detailTitle: document.querySelector("#detailTitle"),
  detailVisual: document.querySelector("#detailVisual"),
  rejectReasonGrid: document.querySelector("#rejectReasonGrid"),
  dailyTableHead: document.querySelector("#dailyTableHead"),
  dailyTableBody: document.querySelector("#dailyTableBody"),
  whitelistUpdatedAt: document.querySelector("#whitelistUpdatedAt"),
  whitelistOtaBody: document.querySelector("#whitelistOtaBody"),
  stepChart: document.querySelector("#stepChart"),
  uiShowcase: document.querySelector("#uiShowcase"),
  featureProgress: document.querySelector("#featureProgress"),
};

const state = {
  selectedMarket: "MY",
  selectedProduct: "SPL",
  selectedStep: "submitDoc",
};

bootstrap();

function bootstrap() {
  renderMarketOptions();
  renderProductOptions();
  ensureSelectedStep();
  bindEvents();
  renderAll();
}

function bindEvents() {
  refs.daySelect.addEventListener("change", (event) => {
    state.selectedMarket = event.target.value;
    renderAll();
  });

  refs.productSelect.addEventListener("change", (event) => {
    state.selectedProduct = event.target.value;
    ensureSelectedStep();
    renderAll();
  });
}

function renderAll() {
  ensureSelectedStep();
  renderStepRail();
  renderKpis();
  renderDetail();
  renderRejectReasonDistribution();
  renderStepChart();
  renderMarketTable();
  renderWhitelistOta();
  renderUiShowcase();
  renderFeatureProgress();
}

function renderMarketOptions() {
  refs.daySelect.innerHTML = getCurrentDataset()
    .map(
      (item) =>
        `<option value="${item.market}" ${item.market === state.selectedMarket ? "selected" : ""}>${item.market}</option>`,
    )
    .join("");
}

function renderProductOptions() {
  refs.productSelect.innerHTML = Object.keys(productDefinitions)
    .map(
      (product) =>
        `<option value="${product}" ${product === state.selectedProduct ? "selected" : ""}>${product}</option>`,
    )
    .join("");
}

function renderStepRail() {
  const selected = getSelectedRecord();
  const steps = getCurrentProductDefinition().steps;

  refs.stepRail.innerHTML = steps
    .map(
      (step) => `
        <button class="step-card ${step.key === state.selectedStep ? "active" : ""}" data-step="${step.key}">
          <small>${step.stepLabel}</small>
          <strong>${step.label}</strong>
          <p>${formatNumber(selected[step.key])}</p>
        </button>
      `,
    )
    .join("");

  refs.stepRail.querySelectorAll(".step-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedStep = button.dataset.step;
      renderStepRail();
      renderDetail();
    });
  });
}

function renderKpis() {
  const selected = getSelectedRecord();
  const productDef = getCurrentProductDefinition();

  refs.selectedDayTitle.textContent = `${selected.market} ${productDef.titleLabel} (${reportPeriod})`;

  refs.kpiGrid.innerHTML = productDef.kpis
    .map(
      (item) =>
        `<div class="kpi-card"><span>${item.label}</span><strong>${displayPercent(
          item.calc(selected),
          item.digits ?? 2,
        )}</strong><em>${item.delta}</em></div>`,
    )
    .join("");

  refs.funnelBars.innerHTML = productDef.bars
    .map((item) => {
      const leftCount = selected[item.leftKey];
      const rightCount = selected[item.rightKey];
      return `
        <div class="funnel-row">
          <div class="funnel-meta">
            <strong>${item.label}</strong>
            <div class="funnel-counts">
              <span>${item.leftLabel}: ${formatNumber(leftCount)}</span>
              <span>${item.rightLabel}: ${formatNumber(rightCount)}</span>
            </div>
          </div>
          <div>
            <div class="bar-track">
              <div class="bar-current" style="width: ${barWidth(ratio(rightCount, leftCount))}%"></div>
            </div>
            <div class="bar-values">
              <span>${displayPercent(ratio(rightCount, leftCount), item.digits ?? 2)}</span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderDetail() {
  const stepDef = getCurrentStepDefinition();
  const detailDef = stepDetailDefinitions[state.selectedStep] ?? {};

  refs.detailTitle.textContent = stepDef.label;

  if (detailDef.visualType === "success-distribution") {
    refs.detailVisual.innerHTML = renderSuccessDistribution();
    return;
  }

  refs.detailVisual.innerHTML = `
    <div class="callout-list">
      <div class="callout-item">
        <strong>${state.selectedProduct} · ${stepDef.label}</strong>
        <p>${detailDef.summary ?? "This step shows the current conversion volume for the selected market and product."}</p>
      </div>
      <div class="callout-item">
        <strong>Tracking logic</strong>
        <p>${detailDef.formula ?? "Displayed directly from the selected product dataset."}</p>
      </div>
    </div>
    ${
      detailDef.visual
        ? `<div class="detail-visual-frame ${detailDef.visual.compact ? "compact" : ""}">
            <img class="detail-visual-image ${detailDef.visual.compact ? "compact" : ""}" src="${detailDef.visual.src}" alt="${detailDef.visual.alt}" />
          </div>`
        : ""
    }
  `;
}

function renderSuccessDistribution() {
  const selectedDistribution = successDistribution.find((item) => item.market === state.selectedMarket);

  if (!selectedDistribution) {
    return `<div class="callout-item"><p>No limit increase mix is available for the selected market.</p></div>`;
  }

  return `
    <div class="success-chart-panel">
      <div class="success-chart-header">
        <strong>${selectedDistribution.market} approved limit increase mix</strong>
        <span>Temp vs Perm increase ranges</span>
      </div>
      <div class="success-market-grid">
        <section class="success-market-card">
          <div class="success-market-head">
            <span class="success-market-dot" style="background:${selectedDistribution.color}"></span>
            <strong>${selectedDistribution.market}</strong>
          </div>
          ${renderSuccessGroup("Temp Limit Increase (USD)", selectedDistribution.temp, selectedDistribution.color)}
          ${renderSuccessGroup("Perm Limit Increase (USD)", selectedDistribution.perm, selectedDistribution.color)}
        </section>
      </div>
    </div>
  `;
}

function renderSuccessGroup(title, rows, color) {
  if (!rows.length) {
    return `
      <div class="success-group">
        <span class="success-group-title">${title}</span>
        <p class="success-empty">No highlighted range shared.</p>
      </div>
    `;
  }

  return `
    <div class="success-group">
      <span class="success-group-title">${title}</span>
      <div class="success-bars">
        ${rows
          .map(
            (row) => `
              <div class="success-row">
                <div class="success-row-meta">
                  <span>${row.range}</span>
                  <strong>${row.display}</strong>
                </div>
                <div class="success-bar-track">
                  <div class="success-bar-fill" style="width:${Math.max(6, Math.min(100, row.value))}%; background:${color};"></div>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderMarketTable() {
  const dataset = getCurrentDataset();
  const productDef = getCurrentProductDefinition();

  refs.dailyTableHead.innerHTML = productDef.tableColumns
    .map((column) => `<th>${column.label}</th>`)
    .join("");

  refs.dailyTableBody.innerHTML = dataset
    .map((item) => {
      const isSelected = item.market === state.selectedMarket;
      return `
        <tr>
          ${productDef.tableColumns
            .map((column) => renderTableCell(item, column, isSelected))
            .join("")}
        </tr>
      `;
    })
    .join("");
}

function renderTableCell(item, column, isSelected) {
  if (column.type === "text") {
    return `<td${isSelected ? ' class="strong-cell"' : ""}>${item.market}</td>`;
  }

  if (column.type === "note") {
    return `<td>${item.noteOverride ?? marketNotes[item.market] ?? "-"}</td>`;
  }

  if (column.type === "percent") {
    return `<td>${displayPercent(column.calc(item), column.digits ?? 2)}</td>`;
  }

  return `<td>${formatNumber(item[column.key])}</td>`;
}

function renderRejectReasonDistribution() {
  const maxReasonCount = Math.max(...rejectReasonDistribution.map((market) => market.reasons.length), 0);

  refs.rejectReasonGrid.innerHTML = rejectReasonDistribution
    .map((market) => {
      const maxValue = Math.max(...market.reasons.map((item) => item.value), 0);
      return `
        <section class="reject-market-card">
          <div class="reject-market-head">
            <span class="reject-market-dot" style="background:${market.color}"></span>
            <strong>${market.market}</strong>
          </div>
          ${
            market.note
              ? `<div class="reject-market-note-wrap">
                  <p class="reject-market-note">${market.note}</p>
                  <div class="reject-bars reject-bars-placeholder">
                    ${Array.from({ length: maxReasonCount }, () => `
                      <div class="reject-row placeholder">
                        <div class="reject-row-meta">
                          <span>&nbsp;</span>
                          <strong>&nbsp;</strong>
                        </div>
                        <div class="reject-bar-track">
                          <div class="reject-bar-fill placeholder"></div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>`
              : `<div class="reject-bars">
                  ${market.reasons
                    .map((item) => {
                      const width = maxValue > 0 ? Math.max(6, (item.value / maxValue) * 100) : 0;
                      return `
                        <div class="reject-row">
                          <div class="reject-row-meta">
                            <span>${item.label}</span>
                            <strong>${item.value}</strong>
                          </div>
                          <div class="reject-bar-track">
                            <div class="reject-bar-fill" style="width:${width}%; background:${market.color};"></div>
                          </div>
                        </div>
                      `;
                    })
                    .join("")}
                </div>`
          }
        </section>
      `;
    })
    .join("");
}

function renderWhitelistOta() {
  refs.whitelistUpdatedAt.textContent = whitelistOtaUpdatedAt;
  refs.whitelistOtaBody.innerHTML = whitelistOtaData
    .map(
      (item) => `
        <tr>
          <td class="${item.track === state.selectedProduct ? "strong-cell" : ""}">${item.track}</td>
          <td class="${state.selectedMarket === "ID" ? "strong-cell" : ""}">${item.ID}</td>
          <td class="${state.selectedMarket === "MY" ? "strong-cell" : ""}">${item.MY}</td>
          <td class="${state.selectedMarket === "PH" ? "strong-cell" : ""}">${item.PH}</td>
          <td class="${state.selectedMarket === "TH" ? "strong-cell" : ""}">${item.TH}</td>
          <td class="${state.selectedMarket === "VN" ? "strong-cell" : ""}">${item.VN}</td>
        </tr>
      `,
    )
    .join("");
}

function renderStepChart() {
  const dataset = getCurrentDataset();
  const chartSteps = getCurrentProductDefinition().chartSteps;
  const width = Math.max(920, 180 * chartSteps.length);
  const height = 460;
  const margin = { top: 32, right: 36, bottom: 84, left: 88 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(
    ...dataset.flatMap((item) =>
      chartSteps.map((step) => (Number.isFinite(item[step.key]) ? item[step.key] : 0)),
    ),
  );
  const safeMaxValue = Math.max(maxValue, 1);
  const tickCount = 4;
  const yTicks = Array.from({ length: tickCount + 1 }, (_, index) =>
    Math.round((safeMaxValue / tickCount) * (tickCount - index)),
  );

  const y = (value) => margin.top + innerHeight - (value / safeMaxValue) * innerHeight;
  const x = (index) => margin.left + (innerWidth / Math.max(chartSteps.length - 1, 1)) * index;

  const gridLines = yTicks
    .map(
      (tick) => `
        <line x1="${margin.left}" y1="${y(tick)}" x2="${width - margin.right}" y2="${y(tick)}" class="chart-grid-line" />
        <text x="${margin.left - 16}" y="${y(tick) + 4}" text-anchor="end" class="chart-axis-label">${formatCompactNumber(
          tick,
        )}</text>
      `,
    )
    .join("");

  const stepLabels = chartSteps
    .map(
      (step, index) => `
        <text x="${x(index)}" y="${height - 34}" text-anchor="middle" class="chart-step-label">${step.label}</text>
        <text x="${x(index)}" y="${height - 14}" text-anchor="middle" class="chart-step-subtext">${step.fullLabel}</text>
      `,
    )
    .join("");

  const series = chartSeries
    .map((seriesItem) => {
      const market = dataset.find((item) => item.market === seriesItem.key);
      if (!market) {
        return "";
      }

      const points = chartSteps.map((step, index) => `${x(index)},${y(Number.isFinite(market[step.key]) ? market[step.key] : 0)}`).join(" ");
      const circles = chartSteps
        .map(
          (step, index) => `
            <circle cx="${x(index)}" cy="${y(Number.isFinite(market[step.key]) ? market[step.key] : 0)}" r="${
              state.selectedMarket === market.market ? 5 : 4
            }" fill="${seriesItem.color}" class="chart-point" />
          `,
        )
        .join("");

      return `
        <polyline
          points="${points}"
          fill="none"
          stroke="${seriesItem.color}"
          stroke-width="${state.selectedMarket === market.market ? 4 : 3}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="${state.selectedMarket === market.market ? 1 : 0.78}"
        />
        ${circles}
      `;
    })
    .join("");

  const legend = chartSeries
    .filter((item) => dataset.some((market) => market.market === item.key))
    .map(
      (item) => `
        <div class="chart-legend-item ${state.selectedMarket === item.key ? "active" : ""}">
          <span class="chart-legend-dot" style="background:${item.color}"></span>
          <span>${item.key}</span>
        </div>
      `,
    )
    .join("");

  refs.stepChart.innerHTML = `
    <div class="chart-legend">${legend}</div>
    <div class="chart-frame">
      <svg viewBox="0 0 ${width} ${height}" class="chart-svg" role="img" aria-label="Line chart of users by step, market, and product">
        ${gridLines}
        <line x1="${margin.left}" y1="${margin.top + innerHeight}" x2="${width - margin.right}" y2="${
          margin.top + innerHeight
        }" class="chart-axis-line" />
        <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${margin.top + innerHeight}" class="chart-axis-line" />
        ${series}
        ${stepLabels}
      </svg>
    </div>
  `;
}

function renderUiShowcase() {
  refs.uiShowcase.innerHTML = uiPanels
    .map(
      (panel) => `
        <div class="ui-panel">
          <div class="phone-stack">
            <div class="phone-label">${panel.label}</div>
            <div class="phone-gallery ${
              panel.images.length === 2 ? "two-shot-row" : panel.images.length > 1 ? "multi-shot" : "single-shot"
            }">
              ${panel.images
                .map(
                  (image, index) =>
                    `<img class="phone-shot" src="${image.src}" alt="${image.alt ?? `${panel.label} screen ${index + 1}`}" />`,
                )
                .join("")}
            </div>
          </div>
          <div class="callout-list">
            ${panel.highlights
              .map(
                (item) =>
                  `<div class="callout-item"><strong>${item.title}</strong><p>${item.body}</p></div>`,
              )
              .join("")}
          </div>
        </div>
      `,
    )
    .join("");
}

function renderFeatureProgress() {
  refs.featureProgress.innerHTML = featureProgressGroups
    .map(
      (group) => `
        <section class="progress-group">
          <div class="progress-stage">${group.stage}</div>
          ${
            group.items.length
              ? `<div class="progress-items">
                  ${group.items
                    .map(
                      (item) => `
                        <article class="progress-item">
                          <div class="progress-row">
                            <span class="progress-label">ETA</span>
                            <strong>${item.eta}</strong>
                          </div>
                          <div class="progress-row progress-feature">
                            <span class="progress-label">Feature</span>
                            <span>${item.feature}</span>
                          </div>
                        </article>
                      `,
                    )
                    .join("")}
                </div>`
              : `<div class="progress-empty">No item in this stage yet.</div>`
          }
        </section>
      `,
    )
    .join("");
}

function getCurrentDataset() {
  return productDatasets[state.selectedProduct] ?? productDatasets.SPL;
}

function getSelectedRecord() {
  return getCurrentDataset().find((item) => item.market === state.selectedMarket) ?? getCurrentDataset()[0];
}

function getCurrentProductDefinition() {
  return productDefinitions[state.selectedProduct] ?? productDefinitions.SPL;
}

function getCurrentStepDefinition() {
  return getCurrentProductDefinition().steps.find((item) => item.key === state.selectedStep) ?? getCurrentProductDefinition().steps[0];
}

function ensureSelectedStep() {
  const steps = getCurrentProductDefinition().steps;
  if (!steps.some((step) => step.key === state.selectedStep)) {
    state.selectedStep = steps[0].key;
  }
}

function ratio(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || b === 0) {
    return null;
  }
  return a / b;
}

function displayPercent(value, digits = 2) {
  if (!Number.isFinite(value)) {
    return "-";
  }
  return `${(value * 100).toFixed(digits)}%`;
}

function formatNumber(value) {
  if (!Number.isFinite(value)) {
    return "-";
  }
  return new Intl.NumberFormat("en-US").format(value);
}

function formatCompactNumber(value) {
  if (!Number.isFinite(value)) {
    return "-";
  }
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

function barWidth(value) {
  if (!Number.isFinite(value)) {
    return 0;
  }
  return Math.max(0, Math.min(100, value * 100));
}
