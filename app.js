const reportPeriod = "2026-04-01 ~ 2026-06-20";

const marketData = [
  {
    market: "ID",
    viewEntrance: 270786,
    entryClick: 46203,
    enterUploadPage: 3062,
    submitDoc: 90,
    opsScreening: 67,
    opsApproved: 23,
    opsRejected: 44,
    riskPolicy: 23,
    riskApproved: 13,
    riskRejected: 10,
    limitIncreaseSuccess: 13,
    approvalNote:
      "ID will be the first region make revamp, will check data later, if CR raise well, we will migrate this revamp to other region.",
  },
  {
    market: "MY",
    viewEntrance: 242379,
    entryClick: 15174,
    enterUploadPage: 5430,
    submitDoc: 219,
    opsScreening: 219,
    opsApproved: 101,
    opsRejected: 118,
    riskPolicy: 101,
    riskApproved: 70,
    riskRejected: 31,
    limitIncreaseSuccess: 70,
    approvalNote:
      "We already developed cross-product sharing, but not roll out yet, we will remove 2W from sharing then roll out sharing.",
  },
  {
    market: "PH",
    viewEntrance: 82253,
    entryClick: 25650,
    enterUploadPage: 106,
    submitDoc: 14,
    opsScreening: 11,
    opsApproved: 4,
    opsRejected: 7,
    riskPolicy: 4,
    riskApproved: 2,
    riskRejected: 2,
    limitIncreaseSuccess: 2,
    approvalNote:
      "PH just raised FRF to make enhancement to improve CR, we will check in late Q3.",
  },
  {
    market: "VN",
    viewEntrance: 14778,
    entryClick: 14278,
    enterUploadPage: 111,
    submitDoc: 2,
    opsScreening: null,
    opsApproved: null,
    opsRejected: null,
    riskPolicy: 0,
    riskApproved: 0,
    riskRejected: 0,
    limitIncreaseSuccess: 0,
    approvalNote:
      "VN's whitelist volume is very low, so we do not have enough sample to check CR.",
  },
  {
    market: "TH",
    viewEntrance: 19529,
    entryClick: 13801,
    enterUploadPage: 10547,
    submitDoc: 1670,
    opsScreening: 1541,
    opsApproved: 1463,
    opsRejected: 78,
    riskPolicy: 1741,
    riskApproved: 1626,
    riskRejected: 115,
    limitIncreaseSuccess: 1409,
    approvalNote:
      "TH just added whitelist in June, traffic is increasing. TH's FE is similar to other regions but data is much better (maybe bankstatement is easier to get in TH).",
  },
];

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
    temp: [
      { range: "(60,80]", value: 13, display: "13%" },
    ],
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
      { label: "Insufficient Doc", value: 0 },
      { label: "Unofficial Doc", value: 42 },
      { label: "Mismatch Doc Type", value: 8 },
      { label: "Not Recent Doc", value: 8 },
      { label: "Mismatch Name/NRIC/ID", value: 6 },
      { label: "Low Quality Doc", value: 2 },
      { label: "Password protected", value: 1 },
      { label: "Hard Reject", value: 1 },
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
      { label: "Mismatch Doc Type", value: 9 },
      { label: "Not Recent Doc", value: 14 },
      { label: "Mismatch Name/NRIC/ID", value: 5 },
      { label: "Low Quality Doc", value: 2 },
      { label: "Password protected", value: 10 },
      { label: "Hard Reject", value: 1 },
      { label: "Doc Amount Not Match", value: 12 },
      { label: "Others", value: 0 },
    ],
  },
  {
    market: "PH",
    color: "#2ec4b6",
    note: "",
    reasons: [
      { label: "Insufficient Doc", value: 1 },
      { label: "Unofficial Doc", value: 1 },
      { label: "Mismatch Doc Type", value: 1 },
      { label: "Not Recent Doc", value: 2 },
      { label: "Mismatch Name/NRIC/ID", value: 0 },
      { label: "Low Quality Doc", value: 0 },
      { label: "Password protected", value: 1 },
      { label: "Hard Reject", value: 0 },
      { label: "Doc Amount Not Match", value: 0 },
      { label: "Others", value: 4 },
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
      { label: "Insufficient Doc", value: 0 },
      { label: "Unofficial Doc", value: 2 },
      { label: "Mismatch Doc Type", value: 94 },
      { label: "Not Recent Doc", value: 37 },
      { label: "Mismatch Name/NRIC/ID", value: 77 },
      { label: "Low Quality Doc", value: 1 },
      { label: "Password protected", value: 1 },
      { label: "Hard Reject", value: 0 },
      { label: "Doc Amount Not Match", value: 0 },
      { label: "Others", value: 0 },
    ],
  },
];

const stepDefinitions = [
  {
    key: "viewEntrance",
    label: "Entry View",
    summary: "This step focuses on whether users can discover the limit-increase journey at all.",
    points: [
      "Add more entrances for limit increase.",
    ],
    goals: [
      "Increase exposure.",
    ],
    visual: {
      src: "./assets/entry-view-spaylater.png",
      alt: "SPayLater entry examples for higher limit discovery",
    },
  },
  {
    key: "entryClick",
    label: "Entry Click",
    summary: "This step reflects whether the entry messaging is attractive enough to trigger a click.",
    points: [
      "Add stronger marketing selling points at the entry.",
    ],
    goals: [
      "Increase attractiveness.",
    ],
    visual: {
      src: "./assets/entry-click-spaylater.png",
      alt: "SPayLater entry surfaces for higher limit click conversion",
    },
  },
  {
    key: "enterUploadPage",
    label: "Enter Upload Page",
    summary: "This step focuses on whether users can continue the flow smoothly after they land on the upload page.",
    points: [
      "Allow users to submit documents one by one on the upload page and show real-time status on the home page.",
    ],
    goals: [
      "Reduce friction and make progress more visible.",
    ],
    visual: {
      src: "./assets/upload-page-limit-form.png",
      alt: "Higher credit limit upload page with income declaration and document upload form",
    },
  },
  {
    key: "submitDoc",
    label: "Submit Document",
    summary: "Submission is the most important front-end step and the most direct conversion target for the revamp.",
    points: [
      "Integrate with Quality Check model, block some invalid files directly.",
    ],
    goals: [
      "Increase risk approval rate, decrease ops screening effort.",
    ],
    visual: {
      src: "./assets/document-submitted-under-review.png",
      alt: "Limit increase application under review confirmation page",
    },
  },
  {
    key: "riskPolicy",
    label: "Screening Passed",
    summary: "This step shows how many tickets can move from front-end submission into final underwriting review.",
    points: [
      "Improve pre-check quality so fewer invalid files flow into manual screening and underwriting.",
    ],
    goals: [
      "Increase review efficiency and raise valid case quality.",
    ],
    visual: {
      src: "./assets/screening-passed-review-console.png",
      alt: "Screening review console with document validation fields",
      compact: true,
    },
  },
  {
    key: "limitIncreaseSuccess",
    label: "Limit Increase Success",
    summary: "This is the final end-to-end business outcome and reflects whether the full flow can deliver real limit uplift.",
    points: [
      "Use better guidance, quality check, and resubmission support to drive more approved users to final success.",
    ],
    goals: [
      "Increase final limit increase success volume.",
    ],
    visualType: "success-distribution",
  },
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

const talkingPoints = [
  "ID SPL/BCL Revamp: ETA July v2",
  "ID SME Enhance: ETA Aug v1",
  "Other Region SPL/BCL: PH just raised FRF",
  "MY Income Doc Streamline",
];

const chartSeries = [
  { key: "ID", color: "#ff6b35" },
  { key: "MY", color: "#ff9f1c" },
  { key: "PH", color: "#2ec4b6" },
  { key: "VN", color: "#6a5acd" },
  { key: "TH", color: "#1982c4" },
];

const chartSteps = [
  { key: "viewEntrance", label: "Step 1", fullLabel: "View Entrance" },
  { key: "entryClick", label: "Step 2", fullLabel: "Entry Click" },
  { key: "enterUploadPage", label: "Step 3", fullLabel: "Enter Upload Page" },
  { key: "submitDoc", label: "Step 4", fullLabel: "Submit Doc" },
  { key: "riskPolicy", label: "Step 5", fullLabel: "Risk Policy" },
  { key: "limitIncreaseSuccess", label: "Step 6", fullLabel: "Limit Increase Success" },
];

const refs = {
  daySelect: document.querySelector("#daySelect"),
  stepRail: document.querySelector("#stepRail"),
  selectedDayTitle: document.querySelector("#selectedDayTitle"),
  kpiGrid: document.querySelector("#kpiGrid"),
  funnelBars: document.querySelector("#funnelBars"),
  detailTitle: document.querySelector("#detailTitle"),
  detailVisual: document.querySelector("#detailVisual"),
  rejectReasonGrid: document.querySelector("#rejectReasonGrid"),
  dailyTableBody: document.querySelector("#dailyTableBody"),
  stepChart: document.querySelector("#stepChart"),
  uiShowcase: document.querySelector("#uiShowcase"),
  talkingPoints: document.querySelector("#talkingPoints"),
};

const state = {
  selectedMarket: "MY",
  selectedStep: "submitDoc",
};

bootstrap();

function bootstrap() {
  renderMarketOptions();
  bindEvents();
  renderAll();
}

function bindEvents() {
  refs.daySelect.addEventListener("change", (event) => {
    state.selectedMarket = event.target.value;
    renderAll();
  });
}

function renderAll() {
  renderStepRail();
  renderKpis();
  renderDetail();
  renderRejectReasonDistribution();
  renderStepChart();
  renderMarketTable();
  renderUiShowcase();
  renderTalkingPoints();
}

function renderMarketOptions() {
  refs.daySelect.innerHTML = marketData
    .map(
      (item) =>
        `<option value="${item.market}" ${item.market === state.selectedMarket ? "selected" : ""}>${item.market}</option>`,
    )
    .join("");
}

function renderStepRail() {
  const selected = getSelectedMarket();
  const cards = [
    {
      key: "viewEntrance",
      label: "Entry View",
      count: selected.viewEntrance,
      hint: "View Entrance",
    },
    {
      key: "entryClick",
      label: "Entry Click",
      count: selected.entryClick,
      hint: `Click / View ${displayPercent(ratio(selected.entryClick, selected.viewEntrance))}`,
    },
    {
      key: "enterUploadPage",
      label: "Upload Page Visit",
      count: selected.enterUploadPage,
      hint: `#3 / #1 ${displayPercent(enterRate(selected))}`,
    },
    {
      key: "submitDoc",
      label: "Document Submitted",
      count: selected.submitDoc,
      hint: `#4 / #3 ${displayPercent(submitRate(selected))}`,
    },
    {
      key: "riskPolicy",
      label: "Screening Passed",
      count: selected.riskPolicy,
      hint: `#6 ${formatNumber(selected.riskPolicy)}`,
    },
    {
      key: "limitIncreaseSuccess",
      label: "Limit Increase Success",
      count: selected.limitIncreaseSuccess,
      hint: `#7 / #1 ${displayPercent(e2eRate(selected), 3)}`,
    },
  ];

  refs.stepRail.innerHTML = cards
    .map(
      (item, index) => `
        <button class="step-card ${item.key === state.selectedStep ? "active" : ""}" data-step="${
          item.key
        }">
          <small>STEP ${index + 1}</small>
          <strong>${item.label}</strong>
          <p>${formatNumber(item.count)}</p>
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
  const selected = getSelectedMarket();
  refs.selectedDayTitle.textContent = `${selected.market} Real Funnel (${reportPeriod})`;

  const kpis = [
    { label: "Click -> Upload Page CR", value: displayPercent(clickToUploadRate(selected)), delta: "#3 / #2" },
    { label: "Doc Submit CR", value: displayPercent(submitRate(selected)), delta: "#4 / #3" },
    { label: "Ops Approval Rate", value: displayPercent(opsApprovalRate(selected)), delta: "#5 / #4" },
    { label: "UW Approval Rate", value: displayPercent(uwApprovalRate(selected)), delta: "#6 / #5" },
  ];

  refs.kpiGrid.innerHTML = kpis
    .map(
      (item) =>
        `<div class="kpi-card"><span>${item.label}</span><strong>${item.value}</strong><em>${item.delta}</em></div>`,
    )
    .join("");

  const bars = [
    {
      label: "View -> Click",
      leftLabel: "View",
      leftCount: selected.viewEntrance,
      rightLabel: "Click",
      rightCount: selected.entryClick,
      value: ratio(selected.entryClick, selected.viewEntrance),
    },
    {
      label: "Click -> Upload Page",
      leftLabel: "Click",
      leftCount: selected.entryClick,
      rightLabel: "Visit",
      rightCount: selected.enterUploadPage,
      value: clickToUploadRate(selected),
    },
    {
      label: "Upload Page -> Submit",
      leftLabel: "Visit",
      leftCount: selected.enterUploadPage,
      rightLabel: "Submit",
      rightCount: selected.submitDoc,
      value: submitRate(selected),
    },
    {
      label: "Ops Screening -> Pass",
      leftLabel: "Ops",
      leftCount: selected.opsScreening,
      rightLabel: "Pass",
      rightCount: selected.opsApproved,
      value: opsApprovalRate(selected),
    },
    {
      label: "Risk Policy -> Success",
      leftLabel: "Risk",
      leftCount: selected.riskPolicy,
      rightLabel: "Success",
      rightCount: selected.limitIncreaseSuccess,
      value: successRate(selected),
    },
    {
      label: "View -> Success",
      leftLabel: "View",
      leftCount: selected.viewEntrance,
      rightLabel: "Success",
      rightCount: selected.limitIncreaseSuccess,
      value: e2eRate(selected),
      digits: 3,
    },
  ];

  refs.funnelBars.innerHTML = bars
    .map(
      (item) => `
        <div class="funnel-row">
          <div class="funnel-meta">
            <strong>${item.label}</strong>
            <div class="funnel-counts">
              <span>${item.leftLabel}: ${formatNumber(item.leftCount)}</span>
              <span>${item.rightLabel}: ${formatNumber(item.rightCount)}</span>
            </div>
          </div>
          <div>
            <div class="bar-track">
              <div class="bar-current" style="width: ${barWidth(item.value)}%"></div>
            </div>
            <div class="bar-values">
              <span>${displayPercent(item.value, item.digits ?? 2)}</span>
            </div>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderDetail() {
  const definition =
    stepDefinitions.find((item) => item.key === state.selectedStep) ?? stepDefinitions[0];

  refs.detailTitle.textContent = definition.label;
  if (definition.visualType === "success-distribution") {
    refs.detailVisual.innerHTML = renderSuccessDistribution();
    return;
  }

  refs.detailVisual.innerHTML = definition.visual
    ? `<div class="detail-visual-frame ${definition.visual.compact ? "compact" : ""}"><img class="detail-visual-image ${definition.visual.compact ? "compact" : ""}" src="${definition.visual.src}" alt="${definition.visual.alt}" /></div>`
    : "";
}

function renderSuccessDistribution() {
  const selectedDistribution =
    successDistribution.find((item) => item.market === state.selectedMarket) ?? successDistribution[0];

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
                  <div class="success-bar-fill" style="width:${Math.max(
                    6,
                    Math.min(100, row.value),
                  )}%; background:${color};"></div>
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
  refs.dailyTableBody.innerHTML = marketData
    .map((item) => {
      const selectedClass = item.market === state.selectedMarket ? ' class="strong-cell"' : "";
      return `
        <tr>
          <td${selectedClass}>${item.market}</td>
          <td>${formatNumber(item.viewEntrance)}</td>
          <td>${formatNumber(item.entryClick)}</td>
          <td>${formatNumber(item.enterUploadPage)}</td>
          <td>${formatNumber(item.submitDoc)}</td>
          <td>${formatNumber(item.opsScreening)}</td>
          <td>${formatNumber(item.riskPolicy)}</td>
          <td>${formatNumber(item.limitIncreaseSuccess)}</td>
          <td>${displayPercent(clickToUploadRate(item))}</td>
          <td>${displayPercent(submitRate(item))}</td>
          <td>${displayPercent(opsApprovalRate(item))}</td>
          <td>${displayPercent(uwApprovalRate(item))}</td>
          <td>${displayPercent(e2eRate(item), 3)}</td>
          <td>${item.approvalNote}</td>
        </tr>
      `;
    })
    .join("");
}

function renderRejectReasonDistribution() {
  const maxReasonCount = Math.max(...rejectReasonDistribution.map((market) => market.reasons.length), 0);

  refs.rejectReasonGrid.innerHTML = rejectReasonDistribution
    .map((market) => {
      const sortedReasons = [...market.reasons].sort((a, b) => b.value - a.value);
      const maxValue = Math.max(...sortedReasons.map((item) => item.value), 0);

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
                  ${sortedReasons
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

function renderStepChart() {
  const width = 1120;
  const height = 460;
  const margin = { top: 32, right: 36, bottom: 84, left: 88 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...marketData.flatMap((item) => chartSteps.map((step) => item[step.key])));
  const tickCount = 4;
  const yTicks = Array.from({ length: tickCount + 1 }, (_, index) =>
    Math.round((maxValue / tickCount) * (tickCount - index)),
  );

  const y = (value) => margin.top + innerHeight - (value / maxValue) * innerHeight;
  const x = (index) => margin.left + (innerWidth / (chartSteps.length - 1)) * index;

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
      const market = marketData.find((item) => item.market === seriesItem.key);
      const points = chartSteps
        .map((step, index) => `${x(index)},${y(market[step.key])}`)
        .join(" ");

      const circles = chartSteps
        .map(
          (step, index) => `
            <circle cx="${x(index)}" cy="${y(market[step.key])}" r="${
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
      <svg viewBox="0 0 ${width} ${height}" class="chart-svg" role="img" aria-label="Line chart of users by step and market">
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

function renderTalkingPoints() {
  refs.talkingPoints.innerHTML = talkingPoints
    .map(
      (item, index) =>
        `<div class="talking-pill" data-index="${index + 1}"><p>${item}</p></div>`,
    )
    .join("");
}

function getSelectedMarket() {
  return marketData.find((item) => item.market === state.selectedMarket) ?? marketData[1];
}

function enterRate(item) {
  return ratio(item.enterUploadPage, item.viewEntrance);
}

function submitRate(item) {
  return ratio(item.submitDoc, item.enterUploadPage);
}

function clickToUploadRate(item) {
  return ratio(item.enterUploadPage, item.entryClick);
}

function approvalRate(item) {
  return ratio(item.riskApproved, item.submitDoc);
}

function e2eRate(item) {
  return ratio(item.limitIncreaseSuccess, item.viewEntrance);
}

function opsApprovalRate(item) {
  return ratio(item.opsApproved, item.opsScreening);
}

function uwApprovalRate(item) {
  return ratio(item.riskApproved, item.riskPolicy);
}

function successRate(item) {
  return ratio(item.limitIncreaseSuccess, item.riskPolicy);
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
