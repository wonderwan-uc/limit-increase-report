const spreadsheetId = "1sWhyuZ5uYoDs2Im2iZoBnLiBvA6UXCGezAlpsHE8JL8";
const marketOrder = ["ID", "MY", "PH", "VN", "TH"];

const fields = {
  SPL: [
    "viewEntrance",
    "entryClick",
    "enterUploadPage",
    "submitDoc",
    "opsScreening",
    "opsApproved",
    "opsRejected",
    "modelScreening",
    "modelPassed",
    "modelRejected",
    "riskPolicy",
    "riskApproved",
    "riskRejected",
    "limitIncreaseSuccess",
  ],
  BCL: [
    "viewEntrance",
    "entryClick",
    "enterUploadPage",
    "submitDoc",
    "opsScreening",
    "opsApproved",
    "opsRejected",
    "modelScreening",
    "modelPassed",
    "modelRejected",
    "riskPolicy",
    "riskApproved",
    "riskRejected",
    "limitIncreaseSuccess",
  ],
  SCL: ["invited", "viewed", "started", "submitted", "approved"],
};

// Counts are entered in source-sheet step order. Null is used only when a source cell is missing.
const monthlyData = [
  {
    key: "2026-09",
    label: "September 2026",
    tab: "Sept 2026",
    gid: "960508081",
    products: {
      SPL: {
        ID: [295051, 4001, 3367, 89, 39, 15, 24, 50, 0, 50, 15, 8, 7, 8],
        MY: [202513, 3734, 3560, 463, 463, 334, 129, 0, 0, 0, 334, 208, 126, 208],
        PH: [41486, 2509, 2461, 91, 47, 25, 22, 44, 0, 44, 25, 21, 3, 21],
        VN: [4861, 99, 96, 2, 2, 1, 1, 0, 0, 0, 1, 1, 0, 1],
        TH: [419660, 23971, 20170, 2836, 2267, 2198, 68, 569, 455, 115, 2653, 2130, 523, 2130],
      },
      BCL: {
        ID: [152021, 3265, 2895, 155, 72, 22, 50, 83, 0, 83, 22, 11, 12, 11],
        PH: [18892, 949, 932, 102, 44, 30, 15, 58, 0, 58, 30, 26, 4, 26],
        VN: [3463, 114, 113, 4, 4, 2, 2, 0, 0, 0, 2, 1, 1, 1],
        TH: [68301, 6540, 5847, 2023, 1786, 1741, 45, 237, 145, 92, 1886, 1821, 65, 1821],
      },
      SCL: {
        ID: [352359, 69870, 42290, 22515, 10662],
        MY: [21498, 10557, 6136, 3688, 2595],
        PH: [14296, 8485, 5237, 3209, 1441],
        VN: [597, 522, 337, 96, 28],
        TH: [18781, 4498, 2365, 1077, 222],
      },
    },
  },
  {
    key: "2026-08",
    label: "August 2026",
    tab: "August 2026",
    gid: "467070787",
    products: {
      SPL: {
        ID: [296695, 4011, 3382, 76, 51, 14, 37, 25, 0, 25, 14, 8, 6, 8],
        MY: [208097, 3782, 3632, 276, 276, 189, 87, 0, 0, 0, 188, 121, 67, 121],
        PH: [42100, 2520, 2477, 242, 130, 86, 44, 112, 0, 112, 85, 54, 31, 54],
        VN: [5027, 100, 98, 2, 2, 1, 1, 0, 0, 0, 1, 1, 0, 1],
        TH: [426312, 24195, 20545, 1830, 1482, 1394, 88, 348, 179, 169, 1573, 1556, 17, 1556],
      },
      BCL: {
        ID: [149063, 3511, 3138, 95, 65, 15, 50, 30, 0, 30, 16, 8, 8, 8],
        PH: [24832, 1706, 2943, 402, 229, 155, 74, 173, 0, 173, 155, 123, 32, 123],
        VN: [3490, 40, 130, 6, 6, 2, 4, 0, 0, 0, 1, 1, 0, 1],
        TH: [83380, 1439, 6130, 1703, 1490, 1436, 54, 213, 73, 140, 1509, 1509, 0, 1509],
      },
      SCL: {
        ID: [340177, 66410, 39857, 21088, 10223],
        MY: [21145, 9640, 5461, 3202, 2236],
        PH: [13754, 8149, 4992, 3030, 1378],
        VN: [594, 509, 322, 79, 7],
        TH: [22592, 3766, 1936, 916, 222],
      },
    },
  },
  {
    key: "2026-07",
    label: "July 2026",
    tab: "July 2026",
    gid: "2001198598",
    products: {
      SPL: {
        ID: [231497, 3783, 3498, 85, 63, 16, 47, 20, 0, 20, 16, 8, 8, 8],
        MY: [242520, 4829, 4626, 260, 244, 156, 88, 0, 0, 0, 157, 101, 56, 101],
        PH: [20409, 1217, 1196, 116, 42, 30, 12, 78, 0, 78, 30, 27, 3, 27],
        VN: [4901, 165, 986, 18, 14, 6, 8, 0, 0, 0, 5, 3, 2, 3],
        TH: [307206, 22799, 20487, 2026, 1504, 1428, 76, 471, 284, 187, 1712, 1710, 2, 1710],
      },
      BCL: {
        ID: [141057, 5711, 3367, 131, 98, 20, 78, 31, 0, 31, 20, 9, 11, 9],
        MY: [1445, 1442, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        PH: [11648, 145, 1832, 270, 114, 86, 28, 164, 0, 164, 86, 79, 7, 79],
        VN: [3391, 29, 143, 6, 6, 2, 4, 0, 0, 0, 2, 1, 1, 1],
        TH: [85591, 701, 6385, 1880, 1554, 1501, 53, 350, 120, 230, 1622, 1622, 0, 1622],
      },
      SCL: {
        ID: [341751, 63712, 37732, 19921, 9542],
        MY: [21001, 8833, 4864, 2819, 1935],
        PH: [13463, 7834, 4736, 2850, 1293],
        VN: [594, 495, 288, 61, 7],
        TH: [22594, 3461, 1729, 797, 222],
      },
    },
  },
];

const productDefinitions = {
  SPL: {
    description: "SPL funnel with operations and model screening branches.",
    summary: [
      { label: "#1 View Entrance", key: "viewEntrance", formula: "Total across reported markets" },
      { label: "#4 Submit Doc", key: "submitDoc", formula: "Total across reported markets" },
      { label: "#7 Limit Increase Success", key: "limitIncreaseSuccess", formula: "Total across reported markets" },
      {
        label: "End-to-end conversion",
        numerator: "limitIncreaseSuccess",
        denominator: "viewEntrance",
        digits: 3,
        formula: "#7 ÷ #1",
      },
    ],
    funnel: [
      { step: "#1", label: "View Entrance", key: "viewEntrance" },
      { step: "#2", label: "Click Entrance", key: "entryClick", from: "viewEntrance", rateLabel: "#2 / #1" },
      { step: "#3", label: "Enter Upload Page", key: "enterUploadPage", from: "entryClick", rateLabel: "#3 / #2" },
      { step: "#4", label: "Submit Doc", key: "submitDoc", from: "enterUploadPage", rateLabel: "#4 / #3" },
      { step: "#5.1", label: "Ops Screening", key: "opsScreening", from: "submitDoc", rateLabel: "#5.1 / #4" },
      { step: "#5.2", label: "Model Screening", key: "modelScreening", from: "submitDoc", rateLabel: "#5.2 / #4" },
      { step: "#6", label: "Risk Policy", key: "riskPolicy", from: "submitDoc", rateLabel: "#6 / #4" },
      { step: "#7", label: "Limit Increase Success", key: "limitIncreaseSuccess", from: "riskPolicy", rateLabel: "#7 / #6" },
    ],
    rows: [
      { step: "#1", label: "View Entrance", key: "viewEntrance" },
      { step: "#2", label: "Click Entrance", key: "entryClick", rateFrom: "viewEntrance" },
      { step: "#3", label: "Enter Upload Page", key: "enterUploadPage", rateFrom: "entryClick" },
      { step: "#4", label: "Submit Doc", key: "submitDoc", rateFrom: "enterUploadPage" },
      {
        step: "#5.1",
        label: "Ops Screening",
        key: "opsScreening",
        rateFrom: "submitDoc",
        children: [
          { label: "Approve", key: "opsApproved", rateFrom: "opsScreening" },
          { label: "Reject", key: "opsRejected", rateFrom: "opsScreening" },
        ],
      },
      {
        step: "#5.2",
        label: "Model Screening",
        key: "modelScreening",
        rateFrom: "submitDoc",
        children: [
          { label: "Pass", key: "modelPassed", rateFrom: "modelScreening" },
          { label: "Reject", key: "modelRejected", rateFrom: "modelScreening" },
        ],
      },
      {
        step: "#6",
        label: "Risk Policy",
        key: "riskPolicy",
        rateFrom: "submitDoc",
        children: [
          { label: "Approve", key: "riskApproved", rateFrom: "riskPolicy" },
          { label: "Reject", key: "riskRejected", rateFrom: "riskPolicy" },
        ],
      },
      { step: "#7", label: "Limit Increase Success", key: "limitIncreaseSuccess", rateFrom: "riskPolicy" },
    ],
  },
  BCL: {
    description: "BCL funnel with operations and model screening branches.",
    summary: [
      { label: "#1 View Entrance", key: "viewEntrance", formula: "Total across reported markets" },
      { label: "#4 Submit Doc", key: "submitDoc", formula: "Total across reported markets" },
      { label: "#7 Limit Increase Success", key: "limitIncreaseSuccess", formula: "Total across reported markets" },
      {
        label: "End-to-end conversion",
        numerator: "limitIncreaseSuccess",
        denominator: "viewEntrance",
        digits: 3,
        formula: "#7 ÷ #1",
      },
    ],
    funnel: [
      { step: "#1", label: "View Entrance", key: "viewEntrance" },
      { step: "#2", label: "Click Entrance", key: "entryClick", from: "viewEntrance", rateLabel: "#2 / #1" },
      { step: "#3", label: "Enter Upload Page", key: "enterUploadPage", from: "entryClick", rateLabel: "#3 / #2" },
      { step: "#4", label: "Submit Doc", key: "submitDoc", from: "enterUploadPage", rateLabel: "#4 / #3" },
      { step: "#5.1", label: "Ops Screening", key: "opsScreening", from: "submitDoc", rateLabel: "#5.1 / #4" },
      { step: "#5.2", label: "Model Screening", key: "modelScreening", from: "submitDoc", rateLabel: "#5.2 / #4" },
      { step: "#6", label: "Risk Policy", key: "riskPolicy", from: "submitDoc", rateLabel: "#6 / #4" },
      { step: "#7", label: "Limit Increase Success", key: "limitIncreaseSuccess", from: "riskPolicy", rateLabel: "#7 / #6" },
    ],
    rows: [
      { step: "#1", label: "View Entrance", key: "viewEntrance" },
      { step: "#2", label: "Click Entrance", key: "entryClick", rateFrom: "viewEntrance" },
      { step: "#3", label: "Enter Upload Page", key: "enterUploadPage", rateFrom: "entryClick" },
      { step: "#4", label: "Submit Doc", key: "submitDoc", rateFrom: "enterUploadPage" },
      {
        step: "#5.1",
        label: "Ops Screening",
        key: "opsScreening",
        rateFrom: "submitDoc",
        children: [
          { label: "Approve", key: "opsApproved", rateFrom: "opsScreening" },
          { label: "Reject", key: "opsRejected", rateFrom: "opsScreening" },
        ],
      },
      {
        step: "#5.2",
        label: "Model Screening",
        key: "modelScreening",
        rateFrom: "submitDoc",
        children: [
          { label: "Pass", key: "modelPassed", rateFrom: "modelScreening" },
          { label: "Reject", key: "modelRejected", rateFrom: "modelScreening" },
        ],
      },
      {
        step: "#6",
        label: "Risk Policy",
        key: "riskPolicy",
        rateFrom: "submitDoc",
        children: [
          { label: "Approve", key: "riskApproved", rateFrom: "riskPolicy" },
          { label: "Reject", key: "riskRejected", rateFrom: "riskPolicy" },
        ],
      },
      { step: "#7", label: "Limit Increase Success", key: "limitIncreaseSuccess", rateFrom: "riskPolicy" },
    ],
  },
  SCL: {
    description: "Five-step invitation-to-approval funnel.",
    summary: [
      { label: "#1 Invited", key: "invited", formula: "Total across reported markets" },
      { label: "#4 Submitted", key: "submitted", formula: "Total across reported markets" },
      { label: "#5 Approved", key: "approved", formula: "Total across reported markets" },
      { label: "End-to-end conversion", numerator: "approved", denominator: "invited", digits: 2, formula: "#5 ÷ #1" },
    ],
    funnel: [
      { step: "#1", label: "Invited", key: "invited" },
      { step: "#2", label: "Viewed", key: "viewed", from: "invited", rateLabel: "#2 / #1" },
      { step: "#3", label: "Started", key: "started", from: "viewed", rateLabel: "#3 / #2" },
      { step: "#4", label: "Submitted", key: "submitted", from: "started", rateLabel: "#4 / #3" },
      { step: "#5", label: "Approved", key: "approved", from: "submitted", rateLabel: "#5 / #4" },
    ],
    rows: [
      { step: "#1", label: "Invited", key: "invited" },
      { step: "#2", label: "Viewed", key: "viewed", rateFrom: "invited" },
      { step: "#3", label: "Started", key: "started", rateFrom: "viewed" },
      { step: "#4", label: "Submitted", key: "submitted", rateFrom: "started" },
      { step: "#5", label: "Approved", key: "approved", rateFrom: "submitted" },
    ],
  },
};

const trendColors = ["#5578b6", "#d39a3d", "#e66e4e"];
const trendShortNames = {
  viewEntrance: "View",
  entryClick: "Click",
  enterUploadPage: "Upload",
  submitDoc: "Submit",
  opsScreening: "Ops screen",
  opsApproved: "Ops approve",
  opsRejected: "Ops reject",
  modelScreening: "Model screen",
  modelPassed: "Model pass",
  modelRejected: "Model reject",
  riskPolicy: "Risk policy",
  riskApproved: "UW approve",
  riskRejected: "UW reject",
  limitIncreaseSuccess: "Success",
  invited: "Invited",
  viewed: "Viewed",
  started: "Started",
  submitted: "Submitted",
  approved: "Approved",
};

const refs = {
  monthSelect: document.querySelector("#monthSelect"),
  productSelect: document.querySelector("#productSelect"),
  sourceCaption: document.querySelector("#sourceCaption"),
  sourceLink: document.querySelector("#sourceLink"),
  sourceTab: document.querySelector("#sourceTab"),
  summaryContext: document.querySelector("#summaryContext"),
  funnelContext: document.querySelector("#funnelContext"),
  kpiGrid: document.querySelector("#kpiGrid"),
  stepGrid: document.querySelector("#stepGrid"),
  dataDescription: document.querySelector("#dataDescription"),
  stepTableHead: document.querySelector("#stepTableHead"),
  stepTableBody: document.querySelector("#stepTableBody"),
  chartMarketSelect: document.querySelector("#chartMarketSelect"),
  trendSelection: document.querySelector("#trendSelection"),
  trendLegend: document.querySelector("#trendLegend"),
  stepTrendChart: document.querySelector("#stepTrendChart"),
  trendTableHead: document.querySelector("#trendTableHead"),
  trendTableBody: document.querySelector("#trendTableBody"),
  footerPeriod: document.querySelector("#footerPeriod"),
};

const state = {
  monthKey: monthlyData[0].key,
  product: "SPL",
  chartMarket: "ID",
  selectedStep: null,
};

bootstrap();

function bootstrap() {
  refs.monthSelect.innerHTML = monthlyData
    .map((month) => `<option value="${month.key}">${month.label}</option>`)
    .join("");

  refs.productSelect.innerHTML = Object.keys(productDefinitions)
    .map((product) => `<option value="${product}">${product}</option>`)
    .join("");
  refs.chartMarketSelect.innerHTML = marketOrder
    .map((market) => `<option value="${market}">${market}</option>`)
    .join("");

  refs.monthSelect.value = state.monthKey;
  refs.productSelect.value = state.product;
  refs.chartMarketSelect.value = state.chartMarket;
  refs.monthSelect.addEventListener("change", (event) => {
    state.monthKey = event.target.value;
    state.selectedStep = null;
    renderReport();
  });
  refs.productSelect.addEventListener("change", (event) => {
    state.product = event.target.value;
    state.selectedStep = null;
    renderReport();
  });
  refs.chartMarketSelect.addEventListener("change", (event) => {
    state.chartMarket = event.target.value;
    renderTrendChart(productDefinitions[state.product]);
  });

  renderReport();
}

function renderReport() {
  const month = getSelectedMonth();
  const definition = productDefinitions[state.product];
  const records = getSelectedRecords();
  const recordCount = records.length;

  refs.sourceCaption.textContent = `Income Doc Project Analysis · ${month.label}`;
  refs.sourceTab.textContent = `Source tab: ${month.tab}`;
  refs.sourceLink.href = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit?gid=${month.gid}#gid=${month.gid}`;
  refs.summaryContext.textContent = `${month.label} · ${state.product} · ${recordCount} markets with data`;
  refs.funnelContext.textContent = `${state.product} · ${month.label}`;
  refs.dataDescription.textContent = definition.description;
  refs.footerPeriod.textContent = `${month.label} · ${state.product}`;

  renderSummary(records, definition);
  renderTrendChart(definition);
  renderFunnel(records, definition);
  renderStepTable(records, definition);
}

function renderSummary(records, definition) {
  refs.kpiGrid.innerHTML = definition.summary
    .map((metric) => {
      const isRate = Boolean(metric.numerator && metric.denominator);
      const value = isRate
        ? formatPercent(ratio(sumField(records, metric.numerator), sumField(records, metric.denominator)), metric.digits ?? 2)
        : formatNumber(sumField(records, metric.key));

      return `
        <article class="kpi-card">
          <span class="kpi-label">${metric.label}</span>
          <strong class="kpi-value">${value}</strong>
          <span class="kpi-formula">${metric.formula}</span>
        </article>
      `;
    })
    .join("");
}

function renderTrendChart(definition) {
  const months = [...monthlyData].reverse();
  const rows = definition.rows.flatMap((step) => [
    { step: step.step, label: step.label, key: step.key, child: false },
    ...(step.children ?? []).map((child) => ({
      step: "↳",
      label: child.label,
      key: child.key,
      child: true,
      parentStep: step.step,
      parentLabel: step.label,
    })),
  ]);
  const fieldIndexes = Object.fromEntries(fields[state.product].map((field, index) => [field, index]));
  const monthValues = months.map((month) => {
    const values = month.products[state.product]?.[state.chartMarket];
    return rows.map((row) => {
      const value = values?.[fieldIndexes[row.key]];
      return Number.isFinite(value) ? value : null;
    });
  });

  refs.trendSelection.textContent = `${state.product} · ${state.chartMarket} · July–September 2026`;
  refs.trendLegend.innerHTML = months
    .map(
      (month, index) => `
        <span class="trend-legend-item">
          <span class="trend-legend-swatch" style="background:${trendColors[index]}"></span>
          ${month.label}
        </span>
      `,
    )
    .join("");

  const width = Math.max(930, rows.length * 78 + 110);
  const height = 410;
  const margin = { top: 24, right: 22, bottom: 88, left: 62 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const baseline = margin.top + innerHeight;
  const groupWidth = innerWidth / rows.length;
  const barWidth = Math.min(16, (groupWidth - 18) / months.length);
  const barGap = Math.max(2, Math.min(4, (groupWidth - barWidth * months.length) / (months.length + 1)));
  const ticks = [0, 25, 50, 75, 100];
  const y = (percentage) => baseline - (percentage / 100) * innerHeight;
  const grid = ticks
    .map(
      (tick) => `
        <line x1="${margin.left}" y1="${y(tick)}" x2="${width - margin.right}" y2="${y(tick)}" class="trend-grid-line" />
        <text x="${margin.left - 10}" y="${y(tick) + 3}" text-anchor="end" class="trend-axis-label">${tick}%</text>
      `,
    )
    .join("");

  const bars = rows
    .map((row, rowIndex) => {
      const values = monthValues.map((series) => series[rowIndex]);
      const finiteValues = values.filter((value) => Number.isFinite(value));
      const maxValue = Math.max(...finiteValues, 0);
      const center = margin.left + groupWidth * (rowIndex + 0.5);
      const clusterWidth = barWidth * months.length + barGap * (months.length - 1);
      const startX = center - clusterWidth / 2;
      const barsForMonth = values
        .map((value, monthIndex) => {
          if (!Number.isFinite(value)) {
            return "";
          }

          const x = startX + monthIndex * (barWidth + barGap);
          const monthName = months[monthIndex].label;
          const stepName = row.child ? `${row.parentStep} ${row.parentLabel} · ${row.label}` : `${row.step} ${row.label}`;
          const fullLabel = `${monthName} · ${stepName}: ${formatNumber(value)}`;
          const color = trendColors[monthIndex];

          if (value === 0 || maxValue === 0) {
            return `<line x1="${x}" y1="${baseline - 1}" x2="${x + barWidth}" y2="${baseline - 1}" class="trend-empty-mark" stroke="${color}"><title>${fullLabel}</title></line>`;
          }

          const barHeight = Math.max(2, (value / maxValue) * innerHeight);
          const barY = baseline - barHeight;
          return `<rect x="${x}" y="${barY}" width="${barWidth}" height="${barHeight}" fill="${color}" class="trend-bar"><title>${fullLabel}</title></rect>`;
        })
        .join("");
      const codeLabel = row.step === "↳" ? "↳" : row.step;
      const shortName = trendShortNames[row.key] ?? row.label;

      return `
        ${barsForMonth}
        <text x="${center}" y="${baseline + 18}" text-anchor="middle" class="trend-step-code">${codeLabel}</text>
        <text x="${center}" y="${baseline + 34}" text-anchor="middle" class="trend-step-name">${shortName}</text>
      `;
    })
    .join("");

  refs.stepTrendChart.setAttribute("viewBox", `0 0 ${width} ${height}`);
  refs.stepTrendChart.setAttribute("width", width);
  refs.stepTrendChart.setAttribute("height", height);
  refs.stepTrendChart.setAttribute("aria-label", `Monthly step counts for ${state.product} in ${state.chartMarket}`);
  refs.stepTrendChart.innerHTML = `
    <title>${state.product} step volume in ${state.chartMarket}, July to September 2026</title>
    <text x="16" y="${margin.top + innerHeight / 2}" text-anchor="middle" class="trend-axis-title" transform="rotate(-90 16 ${margin.top + innerHeight / 2})">Share of this step’s three-month maximum</text>
    ${grid}
    <line x1="${margin.left}" y1="${baseline}" x2="${width - margin.right}" y2="${baseline}" class="trend-axis-line" />
    ${bars}
  `;

  refs.trendTableHead.innerHTML = `
    <tr>
      <th scope="col">Step</th>
      <th scope="col">Stage</th>
      ${months.map((month) => `<th scope="col">${month.label}</th>`).join("")}
    </tr>
  `;
  refs.trendTableBody.innerHTML = rows
    .map((row, rowIndex) => {
      const values = monthValues.map((series) => series[rowIndex]);
      return `
        <tr class="${row.child ? "child-row" : "main-row"}">
          <td>${row.step}</td>
          <td>${row.label}</td>
          ${values.map((value) => `<td>${Number.isFinite(value) ? formatNumber(value) : "—"}</td>`).join("")}
        </tr>
      `;
    })
    .join("");
}

function renderFunnel(records, definition) {
  refs.stepGrid.innerHTML = definition.funnel
    .map((step) => {
      const count = sumField(records, step.key);
      const conversion = step.from ? ratio(count, sumField(records, step.from)) : null;
      const rateText = step.from
        ? `${step.rateLabel} · ${formatPercent(conversion, 2)}`
        : "Funnel starting point";
      const barWidth = step.from && Number.isFinite(conversion)
        ? Math.max(0, Math.min(100, conversion * 100))
        : 100;

      return `
        <button class="step-card ${state.selectedStep === step.key ? "active" : ""}" type="button" data-step-card="${step.key}" aria-pressed="${state.selectedStep === step.key}">
          <span class="step-topline">
            <span class="step-number">${step.step}</span>
            <span class="step-order-dot" aria-hidden="true"></span>
          </span>
          <span class="step-label">${step.label}</span>
          <strong class="step-count">${formatNumber(count)}</strong>
          <span class="step-rate">${rateText}</span>
          <span class="step-track" aria-hidden="true"><span style="width:${barWidth}%"></span></span>
        </button>
      `;
    })
    .join("");

  refs.stepGrid.querySelectorAll("[data-step-card]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedStep = button.dataset.stepCard;
      updateStepHighlight();
      const targetRow = refs.stepTableBody.querySelector(`[data-step="${state.selectedStep}"]`);
      targetRow?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

function renderStepTable(records, definition) {
  refs.stepTableHead.innerHTML = `
    <tr>
      <th scope="col">Step / stage</th>
      ${marketOrder.map((market) => `<th scope="col">${market}</th>`).join("")}
      <th scope="col">Overall</th>
      <th scope="col">Conversion</th>
    </tr>
  `;

  refs.stepTableBody.innerHTML = definition.rows
    .map((step) => {
      const mainRow = renderTableRow(step, records);
      const childRows = (step.children ?? [])
        .map((child) => renderTableRow(child, records, step))
        .join("");
      return mainRow + childRows;
    })
    .join("");

  updateStepHighlight();
}

function renderTableRow(row, records, parent = null) {
  const total = sumField(records, row.key);
  const rate = row.rateFrom ? ratio(total, sumField(records, row.rateFrom)) : null;
  const marketCells = marketOrder
    .map((market) => {
      const record = records.find((item) => item.market === market);
      const value = record ? record[row.key] : null;
      return `<td>${value === null || value === undefined ? "—" : formatNumber(value)}</td>`;
    })
    .join("");
  const rowClass = parent ? "child-row" : "main-row";
  const dataAttribute = parent ? `data-parent-step="${parent.key}"` : `data-step="${row.key}"`;
  const labelClass = parent ? "table-step-label child" : "table-step-label";
  const stepIndex = parent ? "" : `<span class="table-step-index">${row.step}</span>`;

  return `
    <tr class="${rowClass}" ${dataAttribute}>
      <td><span class="${labelClass}">${stepIndex}<span>${row.label}</span></span></td>
      ${marketCells}
      <td>${formatNumber(total)}</td>
      <td class="table-rate">${row.rateFrom ? formatPercent(rate, 2) : "—"}</td>
    </tr>
  `;
}

function updateStepHighlight() {
  refs.stepGrid.querySelectorAll("[data-step-card]").forEach((button) => {
    const active = button.dataset.stepCard === state.selectedStep;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  refs.stepTableBody.querySelectorAll("tr").forEach((row) => {
    const active = row.dataset.step === state.selectedStep || row.dataset.parentStep === state.selectedStep;
    row.classList.toggle("is-highlighted", active);
  });
}

function getSelectedMonth() {
  return monthlyData.find((month) => month.key === state.monthKey) ?? monthlyData[0];
}

function getSelectedRecords() {
  const month = getSelectedMonth();
  const productData = month.products[state.product];

  return marketOrder
    .filter((market) => Object.prototype.hasOwnProperty.call(productData, market))
    .map((market) => {
      const values = productData[market];
      return {
        market,
        ...Object.fromEntries(fields[state.product].map((field, index) => [field, values[index] ?? null])),
      };
    });
}

function sumField(records, key) {
  return records.reduce((sum, record) => sum + (Number.isFinite(record[key]) ? record[key] : 0), 0);
}

function ratio(numerator, denominator) {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
    return null;
  }
  return numerator / denominator;
}

function formatNumber(value) {
  if (!Number.isFinite(value)) {
    return "—";
  }
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

function formatPercent(value, digits = 2) {
  if (!Number.isFinite(value)) {
    return "—";
  }
  return `${(value * 100).toFixed(digits)}%`;
}
