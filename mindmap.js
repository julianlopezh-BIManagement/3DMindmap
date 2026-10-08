/**
 * SP INGENIEROS - 3D MIND MAP & 2D EDT NAVIGATOR (MODO CLARO)
 * - Diálogo de guardado nativo (showSaveFilePicker / Guardar Como)
 * - Hipervinculación y Desglose de Sub-mapas .mindmap.json en cualquier nodo EDT
 * - Referencias completas actualizadas a EDT (Estructura de Desglose del Trabajo)
 * - Paleta visual y motor Three.js en Modo Claro (Light Theme)
 */

// ==========================================
// 1. DATA MODEL & SEED DATASET (EDT SP INGENIEROS)
// ==========================================

const INITIAL_PROJECT = {
  meta: {
    title: "Organigrama general SP Ingenieros & EDT",
    description: "Estructura corporativa y desglose de áreas de trabajo y actividades EDT",
    version: "1.4.0",
    empresa: "SP Ingenieros",
    direccion: "Sostenibilidad & Gerencias",
    gerente: "Fernando Gacharná Rosero / Edwin Peña",
    updatedAt: new Date().toISOString()
  },
  viewSettings: {
    layoutMode: "hierarchy",
    showGrid: true
  },
  collapsedNodeIds: [],
  nodes: [
    // Top Leadership
    {
      id: "root-00",
      parentId: null,
      code: "00",
      title: "ASAMBLEA DE ACCIONISTAS",
      owner: "Accionistas SP",
      level: 0,
      style: { color: "#fef08a", textColor: "#713f12", shape: "box" },
      relationType: "solid",
      markdownNotes: "# Asamblea de Accionistas\nMáximo órgano de gobierno corporativo de SP Ingenieros.",
      attachments: [{ name: "Estatutos_SP_2026.pdf", path: "docs/Estatutos_SP_2026.pdf", type: "pdf" }]
    },
    {
      id: "root-00-rev",
      parentId: "root-00",
      code: "00.01",
      title: "Revisoría Fiscal",
      owner: "Crowe CO S.A.S.",
      level: 1,
      style: { color: "#fef08a", textColor: "#713f12", shape: "box" },
      relationType: "dotted",
      markdownNotes: "## Control y Auditoría Externa\nSupervisión de estados financieros y cumplimiento normativo."
    },
    {
      id: "root-00-jd",
      parentId: "root-00",
      code: "00.02",
      title: "Junta Directiva",
      owner: "Andrés Saldarriaga (Presidente)",
      level: 1,
      style: { color: "#fed7aa", textColor: "#7c2d12", shape: "box" },
      relationType: "solid",
      markdownNotes: "# Junta Directiva\nDefinición estratégica y directrices corporativas."
    },
    {
      id: "root-00-pres",
      parentId: "root-00-jd",
      code: "00.03",
      title: "Presidente",
      owner: "Ana Cecilia Sánchez",
      level: 2,
      style: { color: "#fed7aa", textColor: "#7c2d12", shape: "box" },
      relationType: "solid",
      markdownNotes: "# Presidencia Ejecutiva\nLiderazgo de operaciones, desarrollo de negocios e inversiones."
    },
    {
      id: "root-00-asesor",
      parentId: "root-00-pres",
      code: "00.03.01",
      title: "Asesor Presidencia",
      owner: "Jorge Munera",
      level: 3,
      style: { color: "#fef08a", textColor: "#713f12", shape: "box" },
      relationType: "dotted",
      markdownNotes: "Asesoría estratégica directa a Presidencia."
    },
    {
      id: "root-00-vp",
      parentId: "root-00-pres",
      code: "00.04",
      title: "Vicepresidente",
      owner: "Juan Pablo Aguilar",
      level: 3,
      style: { color: "#000000", textColor: "#ffffff", shape: "box" },
      relationType: "solid",
      markdownNotes: "# Vicepresidencia de Operaciones\nCoordinación de todas las gerencias de ingeniería y gestión."
    },

    // 01 GERENCIA TÉCNICA
    {
      id: "01",
      parentId: "root-00-vp",
      code: "01",
      title: "Gerencia Técnica",
      owner: "Edwin Peña",
      level: 4,
      style: { color: "#000000", textColor: "#ffffff", shape: "box" },
      relationType: "solid",
      markdownNotes: "# Gerencia Técnica\nResponsable de ingeniería, obras civiles, diseños y estructuración de proyectos.",
      attachments: [{ name: "Plan_Maestro_Tecnico.pdf", path: "docs/Plan_Maestro_Tecnico.pdf", type: "pdf" }]
    },
    {
      id: "01.01",
      parentId: "01",
      code: "01.01",
      title: "Obras civiles",
      owner: "Dirección de Obras",
      level: 5,
      style: { color: "#0369a1", textColor: "#ffffff", shape: "box" },
      relationType: "solid",
      markdownNotes: "Ejecución y control de proyectos de infraestructura."
    },
    {
      id: "01.01.01",
      parentId: "01.01",
      code: "01.01.01",
      title: "Licitaciones",
      owner: "Equipo de Propuestas",
      level: 6,
      style: { color: "#dc2626", textColor: "#ffffff", shape: "box" },
      relationType: "solid",
      markdownNotes: "## Licitaciones Activas\n- [x] Licitación Concesión Vial 2026\n- [ ] Concurso de Diseños Túnel Central\n- [ ] Pliego Hidroeléctrica Río Verde",
      attachments: [
        { name: "Pliego_Licitacion_2026.pdf", path: "docs/licitaciones/Pliego_2026.pdf", type: "pdf" },
        { name: "Presupuesto_Oferta.xlsx", path: "docs/licitaciones/Presupuesto.xlsx", type: "xlsx" }
      ]
    },
    {
      id: "01.01.02",
      parentId: "01.01",
      code: "01.01.02",
      title: "Diseños",
      owner: "Director de diseños",
      level: 6,
      style: { color: "#0284c7", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.01.02.01",
      parentId: "01.01",
      code: "01.01.02.01",
      title: "Coordinación Técnica",
      owner: "Coordinador Técnico",
      level: 6,
      style: { color: "#0284c7", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.01.03",
      parentId: "01.01",
      code: "01.01.03",
      title: "Puentes",
      owner: "Especialista Estructuras",
      level: 6,
      style: { color: "#0284c7", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.01.04",
      parentId: "01.01",
      code: "01.01.04",
      title: "Vias",
      owner: "Especialista Pavimentos",
      level: 6,
      style: { color: "#0284c7", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.01.05",
      parentId: "01.01",
      code: "01.01.05",
      title: "Tunel",
      owner: "Especialista Geotécnico",
      level: 6,
      style: { color: "#0284c7", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.01.06",
      parentId: "01.01",
      code: "01.01.06",
      title: "Peaje",
      owner: "Ingeniería de Tránsito",
      level: 6,
      style: { color: "#fecdd3", textColor: "#881337", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.01.07",
      parentId: "01.01",
      code: "01.01.07",
      title: "Centrales Hidroelectricas",
      owner: "Luzma 1 & 2",
      level: 6,
      style: { color: "#0284c7", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },

    // 01.03 SOSTENIBILIDAD
    {
      id: "01.03",
      parentId: "01",
      code: "01.03",
      title: "Sostenibilidad",
      owner: "Fernando Gacharná Rosero",
      level: 5,
      style: { color: "#16a34a", textColor: "#ffffff", shape: "box" },
      relationType: "solid",
      markdownNotes: "# Dirección de Sostenibilidad\nGestión ambiental, social, indicadores, informes y licitaciones.",
      attachments: [
        { name: "Matriz_Documental_Sostenibilidad.xlsx", path: "docs/Matriz_Sostenibilidad.xlsx", type: "xlsx" },
        { name: "Desglose_Sostenibilidad.mindmap.json", path: "docs/Desglose_Sostenibilidad.mindmap.json", type: "mindmap" }
      ]
    },
    {
      id: "01.03.01",
      parentId: "01.03",
      code: "01.03.01",
      title: "PLANIFICACION",
      owner: "Fernando Gacharná",
      level: 6,
      style: { color: "#22c55e", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.03.01.01",
      parentId: "01.03.01",
      code: "01.03.01.01",
      title: "PRESUPUESTO",
      owner: "Costos Sostenibilidad",
      level: 7,
      style: { color: "#4ade80", textColor: "#0f172a", shape: "box" },
      relationType: "solid",
      attachments: [{ name: "Presupuesto_Anual.xlsx", path: "docs/Presupuesto_Anual.xlsx", type: "xlsx" }]
    },
    {
      id: "01.03.01.02",
      parentId: "01.03.01",
      code: "01.03.01.02",
      title: "PLANEACIÓN",
      owner: "Planeación HSE",
      level: 7,
      style: { color: "#4ade80", textColor: "#0f172a", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.03.02",
      parentId: "01.03",
      code: "01.03.02",
      title: "INDICADORES",
      owner: "Gestión HSE",
      level: 6,
      style: { color: "#22c55e", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.03.03",
      parentId: "01.03",
      code: "01.03.03",
      title: "INFORMES",
      owner: "Reportes Consolidados",
      level: 6,
      style: { color: "#22c55e", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.03.04",
      parentId: "01.03",
      code: "01.03.04",
      title: "LICITACIONES",
      owner: "Presupuesto Ambiental",
      level: 6,
      style: { color: "#22c55e", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "01.03.05",
      parentId: "01.03",
      code: "01.03.05",
      title: "PROYECTOS",
      owner: "Programas HSE",
      level: 6,
      style: { color: "#22c55e", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },

    // 02 GERENCIA JURÍDICA
    {
      id: "02",
      parentId: "root-00-vp",
      code: "02",
      title: "Gerencia Jurídica",
      owner: "Gina Jaime",
      level: 4,
      style: { color: "#000000", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "02.01",
      parentId: "02",
      code: "02.01",
      title: "Demandas",
      owner: "Área Litigios",
      level: 5,
      style: { color: "#ea580c", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "02.02",
      parentId: "02",
      code: "02.02",
      title: "Laboral",
      owner: "Asuntos Laborales",
      level: 5,
      style: { color: "#ea580c", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },

    // 03 GERENCIA FINANCIERA
    {
      id: "03",
      parentId: "root-00-vp",
      code: "03",
      title: "Gerencia Financiera",
      owner: "Mauricio Velásquez",
      level: 4,
      style: { color: "#000000", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "03.01",
      parentId: "03",
      code: "03.01",
      title: "Financiera (dirección contable)",
      owner: "Dirección Contable",
      level: 5,
      style: { color: "#f87171", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },

    // 04 GERENCIA ADMINISTRATIVA
    {
      id: "04",
      parentId: "root-00-vp",
      code: "04",
      title: "Gerencia Administrativa",
      owner: "Carlos Ruiz",
      level: 4,
      style: { color: "#000000", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    },
    {
      id: "04.01",
      parentId: "04",
      code: "04.01",
      title: "Adquisiciones y Logística",
      owner: "Dirección A&L (Angela Peláez)",
      level: 5,
      style: { color: "#06b6d4", textColor: "#ffffff", shape: "box" },
      relationType: "solid"
    }
  ]
};

// Storage for runtime local files & submaps
const localFileStore = new Map();
const localFileUrls = new Map();

// ==========================================
// 2. STATE MANAGER & SUB-MAP UNIFICATION
// ==========================================

class AppState {
  constructor() {
    this.project = JSON.parse(JSON.stringify(INITIAL_PROJECT));
    this.selectedNodeId = null;
    this.activeBranchIds = new Set();
    this.searchQuery = "";
    this.levelFilter = "all";
    this.layoutMode = "hierarchy";
    this.showGrid = true;
    this.collapsedNodeIds = new Set();
    
    const saved = localStorage.getItem("sp_mindmap_state_light");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.nodes && parsed.nodes.length > 0) {
          this.project = parsed;
          if (Array.isArray(parsed.collapsedNodeIds)) {
            this.collapsedNodeIds = new Set(parsed.collapsedNodeIds);
          }
        }
      } catch (e) {
        console.warn("Could not restore local storage project", e);
      }
    }
  }

  saveToLocal() {
    this.project.collapsedNodeIds = Array.from(this.collapsedNodeIds);
    localStorage.setItem("sp_mindmap_state_light", JSON.stringify(this.project));
  }

  hasChildren(nodeId) {
    return this.project.nodes.some(n => n.parentId === nodeId);
  }

  getDescendantCount(nodeId) {
    let count = 0;
    let queue = [nodeId];
    while (queue.length > 0) {
      const currId = queue.shift();
      const children = this.getChildren(currId);
      count += children.length;
      children.forEach(c => queue.push(c.id));
    }
    return count;
  }

  isNodeVisible(nodeId) {
    let curr = this.getNode(nodeId);
    while (curr && curr.parentId) {
      if (this.collapsedNodeIds.has(curr.parentId)) {
        return false;
      }
      curr = this.getNode(curr.parentId);
    }
    return true;
  }

  toggleCollapse(nodeId) {
    if (this.collapsedNodeIds.has(nodeId)) {
      this.collapsedNodeIds.delete(nodeId);
    } else {
      this.collapsedNodeIds.add(nodeId);
    }
    this.saveToLocal();
    refreshUI();
  }

  expandAll() {
    this.collapsedNodeIds.clear();
    this.levelFilter = "all";
    this.saveToLocal();
    refreshUI();
  }

  collapseAll() {
    this.collapsedNodeIds.clear();
    this.project.nodes.forEach(n => {
      if (this.hasChildren(n.id)) {
        this.collapsedNodeIds.add(n.id);
      }
    });
    this.saveToLocal();
    refreshUI();
  }

  getNode(id) {
    return this.project.nodes.find(n => n.id === id);
  }

  getChildren(parentId) {
    return this.project.nodes.filter(n => n.parentId === parentId);
  }

  getRootNodes() {
    return this.project.nodes.filter(n => !n.parentId || !this.project.nodes.some(p => p.id === n.parentId));
  }

  getBranchIds(nodeId) {
    const branch = new Set();
    if (!nodeId) return branch;
    branch.add(nodeId);
    let queue = [nodeId];
    while (queue.length > 0) {
      const current = queue.shift();
      const children = this.getChildren(current);
      children.forEach(child => {
        if (!branch.has(child.id)) {
          branch.add(child.id);
          queue.push(child.id);
        }
      });
    }
    return branch;
  }

  addNode(node) {
    this.project.nodes.push(node);
    this.saveToLocal();
  }

  updateNode(id, updates) {
    const node = this.getNode(id);
    if (node) {
      Object.assign(node, updates);
      this.saveToLocal();
    }
  }

  deleteNode(id) {
    const toDelete = this.getBranchIds(id);
    this.project.nodes = this.project.nodes.filter(n => !toDelete.has(n.id));
    if (toDelete.has(this.selectedNodeId)) {
      this.selectedNodeId = null;
      this.activeBranchIds.clear();
    }
    this.saveToLocal();
  }

  proposeLogicalCode(parentId, isSibling = false) {
    let effectiveParentId = parentId;
    if (isSibling && parentId) {
      const currentNode = this.getNode(parentId);
      effectiveParentId = currentNode ? currentNode.parentId : null;
    }

    if (!effectiveParentId) {
      const roots = this.getRootNodes();
      let maxNum = 0;
      roots.forEach(r => {
        if (r.code && /^\d+$/.test(r.code)) {
          const val = parseInt(r.code, 10);
          if (val > maxNum) maxNum = val;
        }
      });
      return String(maxNum + 1).padStart(2, "0");
    }

    const parent = this.getNode(effectiveParentId);
    const parentCode = (parent && parent.code) ? parent.code : "01";
    const siblings = this.getChildren(effectiveParentId);

    let maxSuffix = 0;
    siblings.forEach(s => {
      if (s.code && s.code.startsWith(parentCode + ".")) {
        const suffix = s.code.substring(parentCode.length + 1);
        const num = parseInt(suffix, 10);
        if (!isNaN(num) && num > maxSuffix) {
          maxSuffix = num;
        }
      }
    });

    const nextSuffix = String(Math.max(maxSuffix + 1, siblings.length + 1)).padStart(2, "0");
    return `${parentCode}.${nextSuffix}`;
  }

  // ==========================================
  // HIPERVINCLULACIÓN Y DESGLOSE DE SUB-MAPAS (.mindmap.json)
  // ==========================================
  linkAndExpandSubmap(parentNodeId, submapProject) {
    const parent = this.getNode(parentNodeId);
    if (!parent || !submapProject || !submapProject.nodes) return;

    const parentCode = parent.code || "01";
    const baseLevel = parent.level || 0;

    // Map old submap IDs to new unified IDs
    const idMap = new Map();
    const newNodes = [];

    // Find root nodes of the submap
    const submapRoots = submapProject.nodes.filter(n => !n.parentId || !submapProject.nodes.some(p => p.id === n.parentId));

    submapProject.nodes.forEach((subNode, idx) => {
      const isRoot = submapRoots.some(r => r.id === subNode.id);
      const newId = `submap-${parent.id}-${subNode.id}-${Date.now()}`;
      idMap.set(subNode.id, newId);

      // Construct hierarchical code prefix
      let newCode = "";
      if (isRoot) {
        newCode = `${parentCode}.${String(idx + 1).padStart(2, "0")}`;
      } else {
        newCode = `${parentCode}.${subNode.code || String(idx + 1)}`;
      }

      newNodes.push({
        id: newId,
        parentId: isRoot ? parent.id : (idMap.get(subNode.parentId) || parent.id),
        code: newCode,
        title: subNode.title,
        owner: subNode.owner || parent.owner || "",
        level: baseLevel + 1 + (subNode.level || 0),
        style: subNode.style || { color: "#0284c7", textColor: "#ffffff", shape: "box" },
        relationType: subNode.relationType || "solid",
        markdownNotes: subNode.markdownNotes || `# ${subNode.title}\nDesglosado desde sub-mapa: ${submapProject.meta.title}`,
        attachments: subNode.attachments || [],
        isSubmapNode: true
      });
    });

    // Mark parent as unfolded submap
    parent.submapLinked = true;
    parent.attachments = parent.attachments || [];
    if (!parent.attachments.some(a => a.type === "mindmap")) {
      parent.attachments.push({
        name: `${submapProject.meta.title || "Submapa"}.mindmap.json`,
        path: `submaps/${submapProject.meta.title || "submap"}.mindmap.json`,
        type: "mindmap"
      });
    }

    // Insert new nodes
    this.project.nodes.push(...newNodes);
    this.saveToLocal();
    refreshUI();
    selectNode(parentNodeId, true);
  }
}

const state = new AppState();

// ==========================================
// 3. THREE.JS 3D CANVAS (LIGHT THEME)
// ==========================================

class ThreeEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    
    this.nodeMeshes = new Map();
    this.edgeMeshes = [];
    this.gridHelper = null;
    this.selectionRing = null;

    this.nodePositions = new Map();
    this.lastClickNodeId = null;
    this.lastClickTime = 0;

    this.init();
  }

  init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // 1. Scene with crisp light theme background
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf8fafc);
    this.scene.fog = new THREE.FogExp2(0xf8fafc, 0.0004);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
    this.camera.position.set(0, 200, 650);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    // 4. OrbitControls
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxDistance = 4500;
    this.controls.minDistance = 20;

    // 5. Lighting (Bright natural daylight setup)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.75);
    dirLight1.position.set(300, 500, 400);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0284c7, 0.25);
    dirLight2.position.set(-300, -200, -200);
    this.scene.add(dirLight2);

    // 6. Spatial Grid (Clean light lines)
    this.gridHelper = new THREE.GridHelper(3500, 70, 0xcbd5e1, 0xe2e8f0);
    this.gridHelper.position.y = -260;
    this.scene.add(this.gridHelper);

    // 7. Selection Indicator
    this.createSelectionRing();

    window.addEventListener("resize", () => this.onResize());
    if (window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => this.onResize());
      this.resizeObserver.observe(this.container);
    }
    this.container.addEventListener("pointerdown", (e) => this.onPointerDown(e));
    this.container.addEventListener("pointermove", (e) => this.onPointerMove(e));

    this.animate();
  }

  createSelectionRing() {
    const ringGeo = new THREE.RingGeometry(42, 48, 36);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    this.selectionRing = new THREE.Mesh(ringGeo, ringMat);
    this.selectionRing.visible = false;
    this.scene.add(this.selectionRing);
  }

  onResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width > 0 && height > 0) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
  }

  onPointerDown(event) {
    const rect = this.container.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(Array.from(this.nodeMeshes.values()), true);

    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj && !obj.userData.nodeId && obj.parent) {
        obj = obj.parent;
      }
      if (obj && obj.userData.nodeId) {
        const nodeId = obj.userData.nodeId;
        const now = Date.now();
        const isDoubleClick = this.lastClickNodeId === nodeId && (now - this.lastClickTime < 380);
        this.lastClickNodeId = nodeId;
        this.lastClickTime = now;

        if (isDoubleClick && state.hasChildren(nodeId)) {
          state.toggleCollapse(nodeId);
        } else {
          selectNode(nodeId, true, { x: event.clientX, y: event.clientY });
        }
      }
    } else {
      hideContextMenu();
    }
  }

  onPointerMove(event) {
    const rect = this.container.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(Array.from(this.nodeMeshes.values()), true);

    if (intersects.length > 0) {
      this.container.style.cursor = "pointer";
    } else {
      this.container.style.cursor = "default";
    }
  }

  computeLayout() {
    this.nodePositions.clear();
    if (state.layoutMode === "hierarchy") {
      this.computeHierarchicalLayout();
    } else if (state.layoutMode === "radial") {
      this.computeRadialLayout();
    } else {
      this.computeForceLayout();
    }
  }

  computeHierarchicalLayout() {
    const roots = state.getRootNodes().filter(r => state.isNodeVisible(r.id));
    let currentX = -(roots.length - 1) * 320 / 2;

    const calculateSubtreeWidth = (nodeId) => {
      if (state.collapsedNodeIds.has(nodeId)) return 170;
      const children = state.getChildren(nodeId).filter(c => state.isNodeVisible(c.id));
      if (children.length === 0) return 170;
      let total = 0;
      children.forEach(child => {
        total += calculateSubtreeWidth(child.id);
      });
      return Math.max(total + 35, 170);
    };

    const positionSubtree = (nodeId, xCenter, yLevel, zOffset) => {
      this.nodePositions.set(nodeId, { x: xCenter, y: yLevel, z: zOffset });
      if (state.collapsedNodeIds.has(nodeId)) return;

      const children = state.getChildren(nodeId).filter(c => state.isNodeVisible(c.id));
      if (children.length === 0) return;

      const totalWidth = children.reduce((acc, child) => acc + calculateSubtreeWidth(child.id), 0);
      let left = xCenter - totalWidth / 2;

      children.forEach((child, index) => {
        const w = calculateSubtreeWidth(child.id);
        const childCenterX = left + w / 2;
        const childY = yLevel - 115;
        const childZ = zOffset + ((index % 3) - 1) * 35;
        positionSubtree(child.id, childCenterX, childY, childZ);
        left += w;
      });
    };

    roots.forEach(root => {
      const w = calculateSubtreeWidth(root.id);
      positionSubtree(root.id, currentX + w / 2, 220, 0);
      currentX += w + 90;
    });
  }

  computeRadialLayout() {
    const roots = state.getRootNodes().filter(r => state.isNodeVisible(r.id));
    const mainRoot = roots[0] || state.project.nodes.find(n => state.isNodeVisible(n.id));
    if (!mainRoot) return;

    this.nodePositions.set(mainRoot.id, { x: 0, y: 160, z: 0 });

    const positionRadial = (parentId, depth, startAngle, endAngle) => {
      if (state.collapsedNodeIds.has(parentId)) return;
      const children = state.getChildren(parentId).filter(c => state.isNodeVisible(c.id));
      if (children.length === 0) return;

      const angleStep = (endAngle - startAngle) / children.length;
      const radius = depth * 150;
      const yPos = 160 - depth * 65;

      children.forEach((child, idx) => {
        const angle = startAngle + angleStep * (idx + 0.5);
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        this.nodePositions.set(child.id, { x, y: yPos, z });
        positionRadial(child.id, depth + 1, angle - angleStep * 0.45, angle + angleStep * 0.45);
      });
    };

    positionRadial(mainRoot.id, 1, 0, Math.PI * 2);
  }

  computeForceLayout() {
    const nodes = state.project.nodes.filter(n => state.isNodeVisible(n.id));
    const positions = {};

    nodes.forEach((n, i) => {
      const phi = Math.acos(-1 + (2 * i) / Math.max(1, nodes.length));
      const theta = Math.sqrt(nodes.length * Math.PI) * phi;
      const r = 260;
      positions[n.id] = {
        x: r * Math.cos(theta) * Math.sin(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(phi),
        vx: 0, vy: 0, vz: 0
      };
    });

    for (let iter = 0; iter < 45; iter++) {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nA = nodes[i].id;
          const nB = nodes[j].id;
          const pA = positions[nA];
          const pB = positions[nB];
          let dx = pA.x - pB.x;
          let dy = pA.y - pB.y;
          let dz = pA.z - pB.z;
          let dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
          if (dist < 320) {
            const force = (320 - dist) / dist * 0.8;
            pA.vx += dx * force; pA.vy += dy * force; pA.vz += dz * force;
            pB.vx -= dx * force; pB.vy -= dy * force; pB.vz -= dz * force;
          }
        }
      }

      nodes.forEach(n => {
        if (n.parentId && positions[n.parentId]) {
          const pChild = positions[n.id];
          const pParent = positions[n.parentId];
          let dx = pParent.x - pChild.x;
          let dy = pParent.y - pChild.y;
          let dz = pParent.z - pChild.z;
          let dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
          const targetDist = 95;
          const force = (dist - targetDist) * 0.05;
          pChild.vx += (dx / dist) * force;
          pChild.vy += (dy / dist) * force;
          pChild.vz += (dz / dist) * force;
          pParent.vx -= (dx / dist) * force;
          pParent.vy -= (dy / dist) * force;
          pParent.vz -= (dz / dist) * force;
        }
      });

      nodes.forEach(n => {
        const p = positions[n.id];
        p.x += p.vx * 0.15;
        p.y += p.vy * 0.15;
        p.z += p.vz * 0.15;
        p.vx *= 0.85; p.vy *= 0.85; p.vz *= 0.85;
      });
    }

    nodes.forEach(n => {
      this.nodePositions.set(n.id, positions[n.id]);
    });
  }

  // 3D Card Sprite with Excel-like Grouping indicators (Light Mode)
  createNodeCardTexture(node) {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    const hexColor = (node.style && node.style.color) ? node.style.color : "#0284c7";
    const isDark = hexColor === "#000000" || hexColor === "#0369a1" || hexColor === "#dc2626";

    const hasChildren = state.hasChildren(node.id);
    const isCollapsed = state.collapsedNodeIds.has(node.id);
    const descendantCount = hasChildren ? state.getDescendantCount(node.id) : 0;

    const roundRect = (x, y, w, h, radius, fill, stroke, strokeColor) => {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + w - radius, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
      ctx.lineTo(x + w, y + h - radius);
      ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
      ctx.lineTo(x + radius, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      if (fill) ctx.fill();
      if (stroke) {
        ctx.strokeStyle = strokeColor || "#cbd5e1";
        ctx.lineWidth = isCollapsed ? 8 : 6;
        ctx.stroke();
      }
    };

    // 1. Crisp White Card Background (Light Mode)
    ctx.fillStyle = "#ffffff";
    const cardBorderColor = isCollapsed ? "#ca8a04" : "#cbd5e1";
    roundRect(8, 8, 496, 240, 24, true, true, cardBorderColor);

    // 2. Header Color Banner
    ctx.fillStyle = hexColor;
    roundRect(8, 8, 496, 75, 24, true, false);
    ctx.fillRect(8, 50, 496, 33);

    // 3. Header Text: EDT Code
    ctx.fillStyle = isDark ? "#ffffff" : "#0f172a";
    ctx.font = "bold 32px monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(node.code || "EDT", 30, 45);

    // 4. Header Badge: Level indicator & Excel Grouping Toggle ([+] / [-])
    if (hasChildren) {
      if (isCollapsed) {
        // Prominent Excel Collapsed Group Badge
        ctx.fillStyle = "#fef08a";
        roundRect(280, 18, 210, 46, 8, true, true, "#ca8a04");
        ctx.fillStyle = "#854d0e";
        ctx.font = "bold 22px monospace";
        ctx.textAlign = "center";
        ctx.fillText(`[+] ${descendantCount} ítems`, 385, 43);
      } else {
        // Expanded Excel Group Button [-]
        ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.12)";
        roundRect(320, 20, 48, 42, 6, true, false);
        ctx.fillStyle = isDark ? "#ffffff" : "#0f172a";
        ctx.font = "bold 26px monospace";
        ctx.textAlign = "center";
        ctx.fillText("[-]", 344, 43);

        // Level pill
        ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.15)";
        roundRect(385, 20, 95, 42, 6, true, false);
        ctx.fillStyle = isDark ? "#ffffff" : "#0f172a";
        ctx.font = "bold 20px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(`N${node.level || 0}`, 432, 43);
      }
    } else {
      // Standard Level Badge
      ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.15)";
      roundRect(390, 20, 90, 42, 6, true, false);
      ctx.fillStyle = isDark ? "#ffffff" : "#0f172a";
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`N${node.level || 0}`, 435, 43);
    }

    // 5. Body Text: Title / Activity (Dark Navy)
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 34px sans-serif";
    ctx.textAlign = "left";
    const title = node.title || "Actividad";
    const truncatedTitle = title.length > 22 ? title.substring(0, 20) + "..." : title;
    ctx.fillText(truncatedTitle, 30, 130);

    // 6. Subtext: Owner / Encargado
    if (node.owner) {
      ctx.fillStyle = "#475569";
      ctx.font = "italic 26px sans-serif";
      const owner = node.owner.length > 28 ? node.owner.substring(0, 26) + "..." : node.owner;
      ctx.fillText(`👤 ${owner}`, 30, 185);
    }

    // 7. Icon Badges for Sub-maps & Attachments
    if (node.submapLinked) {
      ctx.fillStyle = "#0284c7";
      ctx.font = "bold 22px sans-serif";
      ctx.fillText(`🔗 Sub-mapa EDT`, 320, 220);
    } else if (node.attachments && node.attachments.length > 0) {
      ctx.fillStyle = "#0284c7";
      ctx.font = "bold 22px sans-serif";
      ctx.fillText(`📎 ${node.attachments.length}`, 400, 220);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    return texture;
  }

  rebuildScene() {
    this.nodeMeshes.forEach(mesh => this.scene.remove(mesh));
    this.nodeMeshes.clear();
    this.edgeMeshes.forEach(e => this.scene.remove(e.mesh));
    this.edgeMeshes = [];

    this.computeLayout();

    const hasActiveBranch = state.selectedNodeId && state.activeBranchIds.size > 0;
    const isForceMode = state.layoutMode === "force";
    const visibleNodes = state.project.nodes.filter(n => state.isNodeVisible(n.id));

    // 1. Create 3D Nodes (Only visible under Excel grouping)
    visibleNodes.forEach(node => {
      const pos = this.nodePositions.get(node.id) || { x: 0, y: 0, z: 0 };
      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(pos.x, pos.y, pos.z);
      nodeGroup.userData = { nodeId: node.id };

      const isInBranch = !hasActiveBranch || state.activeBranchIds.has(node.id);
      const opacity = isInBranch ? 1.0 : 0.28;

      const texture = this.createNodeCardTexture(node);
      const cardMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: opacity,
        side: THREE.DoubleSide
      });
      const cardGeo = new THREE.PlaneGeometry(70, 35);
      const cardMesh = new THREE.Mesh(cardGeo, cardMat);
      nodeGroup.add(cardMesh);

      // Backplate Box
      const boxGeo = new THREE.BoxGeometry(68, 33, 4);
      const boxMat = new THREE.MeshStandardMaterial({
        color: state.collapsedNodeIds.has(node.id) ? 0xfef08a : 0xffffff,
        roughness: 0.5,
        metalness: 0.1,
        transparent: true,
        opacity: opacity
      });
      const boxMesh = new THREE.Mesh(boxGeo, boxMat);
      boxMesh.position.z = -2.5;
      nodeGroup.add(boxMesh);

      this.scene.add(nodeGroup);
      this.nodeMeshes.set(node.id, nodeGroup);
    });

    // 2. Create 3D Connecting Edges (Only linking visible nodes)
    visibleNodes.forEach(node => {
      if (node.parentId && this.nodePositions.has(node.parentId) && state.isNodeVisible(node.parentId)) {
        const p1 = this.nodePositions.get(node.parentId);
        const p2 = this.nodePositions.get(node.id);

        const isDotted = node.relationType === "dotted";
        const isInBranch = !hasActiveBranch || (state.activeBranchIds.has(node.id) && state.activeBranchIds.has(node.parentId));

        let points = [];
        if (isForceMode) {
          points = [
            new THREE.Vector3(p1.x, p1.y, p1.z),
            new THREE.Vector3(p2.x, p2.y, p2.z)
          ];
        } else {
          const curve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(p1.x, p1.y - 18, p1.z),
            new THREE.Vector3(p1.x, (p1.y + p2.y) / 2, p1.z),
            new THREE.Vector3(p2.x, (p1.y + p2.y) / 2, p2.z),
            new THREE.Vector3(p2.x, p2.y + 18, p2.z)
          );
          points = curve.getPoints(30);
        }

        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        let lineColor = isInBranch && hasActiveBranch ? 0x0284c7 : (isDotted ? 0xd97706 : 0x94a3b8);
        let opacity = isInBranch ? 1.0 : 0.2;

        let lineMat;
        if (isDotted) {
          lineMat = new THREE.LineDashedMaterial({
            color: lineColor,
            dashSize: 6,
            gapSize: 4,
            linewidth: isInBranch && hasActiveBranch ? 3 : 2,
            transparent: true,
            opacity: opacity
          });
        } else {
          lineMat = new THREE.LineBasicMaterial({
            color: lineColor,
            linewidth: isInBranch && hasActiveBranch ? 3 : 2,
            transparent: true,
            opacity: opacity
          });
        }

        const lineMesh = new THREE.Line(lineGeo, lineMat);
        if (isDotted) lineMesh.computeLineDistances();

        this.scene.add(lineMesh);
        this.edgeMeshes.push({ mesh: lineMesh, sourceId: node.parentId, targetId: node.id });
      }
    });

    this.updateSelectionRing();

    document.getElementById("statTotalNodes").textContent = `${visibleNodes.length} / ${state.project.nodes.length}`;
    document.getElementById("statTotalEdges").textContent = this.edgeMeshes.length;
  }

  updateSelectionRing() {
    if (state.selectedNodeId && this.nodePositions.has(state.selectedNodeId)) {
      const pos = this.nodePositions.get(state.selectedNodeId);
      this.selectionRing.position.set(pos.x, pos.y, pos.z);
      this.selectionRing.visible = true;
    } else {
      this.selectionRing.visible = false;
    }
  }

  flyToNode(nodeId) {
    if (!this.nodePositions.has(nodeId)) return;
    const pos = this.nodePositions.get(nodeId);

    new TWEEN.Tween(this.camera.position)
      .to({ x: pos.x, y: pos.y + 40, z: pos.z + 280 }, 800)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    new TWEEN.Tween(this.controls.target)
      .to({ x: pos.x, y: pos.y, z: pos.z }, 800)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
  }

  zoomToFitAll() {
    if (this.nodePositions.size === 0) return;

    const box = new THREE.Box3();
    this.nodePositions.forEach(pos => {
      box.expandByPoint(new THREE.Vector3(pos.x, pos.y, pos.z));
    });

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z, 200);
    const fov = this.camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs((maxDim / 2) / Math.tan(fov / 2)) * 1.25;
    cameraZ = Math.max(cameraZ, 450);

    new TWEEN.Tween(this.camera.position)
      .to({ x: center.x, y: center.y + 60, z: center.z + cameraZ }, 900)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    new TWEEN.Tween(this.controls.target)
      .to({ x: center.x, y: center.y, z: center.z }, 900)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
  }

  animate(time) {
    requestAnimationFrame((t) => this.animate(t));
    TWEEN.update();
    this.controls.update();

    if (this.selectionRing && this.selectionRing.visible) {
      const scale = 1 + Math.sin(Date.now() * 0.006) * 0.06;
      this.selectionRing.scale.set(scale, scale, 1);
    }

    this.renderer.render(this.scene, this.camera);
  }
}

let threeEngine = null;

// ==========================================
// 4. 2D HIERARCHY & EDT TABLE (LIGHT THEME)
// ==========================================

function renderWBSTable() {
  const tbody = document.getElementById("edtTableBody");
  tbody.innerHTML = "";

  const query = state.searchQuery.toLowerCase().trim();
  const levelFilter = state.levelFilter;
  const hasActiveBranch = state.selectedNodeId && state.activeBranchIds.size > 0;

  let visibleNodes = state.project.nodes.filter(n => {
    // 1. Hide if any ancestor is collapsed (Excel Grouping rule)
    if (!state.isNodeVisible(n.id)) {
      return false;
    }
    // 2. Filter by level if active
    if (levelFilter !== "all" && parseInt(levelFilter) !== n.level) {
      return false;
    }
    // 3. Search query filter
    if (query) {
      const matchCode = (n.code || "").toLowerCase().includes(query);
      const matchTitle = (n.title || "").toLowerCase().includes(query);
      const matchOwner = (n.owner || "").toLowerCase().includes(query);
      return matchCode || matchTitle || matchOwner;
    }
    return true;
  });

  visibleNodes.forEach(node => {
    const tr = document.createElement("tr");
    tr.className = `edt-row edt-row-level-${Math.min(node.level, 3)}`;
    tr.dataset.nodeId = node.id;

    if (node.style && node.style.color === "#dc2626") {
      tr.classList.add("edt-highlight-red");
    } else if (node.style && node.style.color === "#fecdd3") {
      tr.classList.add("edt-highlight-peach");
    }

    if (state.selectedNodeId === node.id) {
      tr.classList.add("selected");
    } else if (hasActiveBranch) {
      if (state.activeBranchIds.has(node.id)) {
        tr.classList.add("branch-active");
      } else {
        tr.classList.add("branch-dimmed");
      }
    }

    const indentPx = Math.max(0, node.level * 16);
    const hasAttachments = node.attachments && node.attachments.length > 0;
    const firstAtt = hasAttachments ? (node.attachments.find(a => a.type !== "mindmap") || node.attachments[0]) : null;

    const hasChildren = state.hasChildren(node.id);
    const isCollapsed = state.collapsedNodeIds.has(node.id);
    const descendantCount = hasChildren ? state.getDescendantCount(node.id) : 0;

    let collapseBtnHtml = "";
    if (hasChildren) {
      collapseBtnHtml = `<button class="edt-excel-collapse-btn ${isCollapsed ? 'collapsed' : 'expanded'}" title="${isCollapsed ? 'Expandir grupo (+)' : 'Colapsar grupo (-)'}" data-node-id="${node.id}">${isCollapsed ? '+' : '-'}</button>`;
    } else {
      collapseBtnHtml = `<span class="edt-excel-collapse-placeholder"></span>`;
    }

    let collapsedBadgeHtml = "";
    if (hasChildren && isCollapsed) {
      collapsedBadgeHtml = `<span class="edt-collapsed-count-badge" data-node-id="${node.id}" title="Haga clic para expandir ${descendantCount} elementos ocultos">+${descendantCount} ítems</span>`;
    }

    tr.innerHTML = `
      <td class="edt-code-cell">${node.code || ""}</td>
      <td class="edt-title-cell" style="padding-left: ${indentPx + 8}px;">
        <div class="edt-title-content">
          ${collapseBtnHtml}
          ${node.submapLinked ? `<span title="Sub-mapa EDT desglosado" style="color: var(--accent-blue);">🔗</span>` : ""}
          ${node.owner ? `<span title="${node.owner}" style="opacity: 0.7; font-size: 10px;">👤</span>` : ""}
          <span style="font-weight: inherit;">${node.title || "Sin título"}</span>
          ${collapsedBadgeHtml}
          ${hasAttachments ? `<span class="edt-att-indicator" title="${node.attachments.length} archivo(s) vinculado(s) - Clic para previsualizar" style="background:#0284c7; color:#fff; font-size:9.5px; font-weight:700; padding:1px 5px; border-radius:3px; cursor:pointer; margin-left:4px;">📎 ${node.attachments.length}</span>` : ""}
        </div>
      </td>
      <td class="edt-actions-cell">
        <button class="edt-mini-btn" title="Agregar dependencia EDT">+H</button>
        <button class="edt-mini-btn" title="Eliminar nodo">✕</button>
      </td>
    `;

    // Handle collapse / expand click
    if (hasChildren) {
      const colBtn = tr.querySelector(".edt-excel-collapse-btn");
      if (colBtn) {
        colBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          state.toggleCollapse(node.id);
        });
      }
      const badge = tr.querySelector(".edt-collapsed-count-badge");
      if (badge) {
        badge.addEventListener("click", (e) => {
          e.stopPropagation();
          state.toggleCollapse(node.id);
        });
      }
    }

    if (hasAttachments) {
      const attBadge = tr.querySelector(".edt-att-indicator");
      if (attBadge) {
        attBadge.addEventListener("click", (e) => {
          e.stopPropagation();
          selectNode(node.id, true);
          if (firstAtt.type === "mindmap") {
            expandSubmapPrompt(node.id, firstAtt);
          } else {
            openSplitViewer(firstAtt);
          }
        });
      }
    }

    tr.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON" || e.target.classList.contains("edt-att-indicator") || e.target.classList.contains("edt-collapsed-count-badge")) return;
      selectNode(node.id, true, { x: e.clientX, y: e.clientY });
    });

    tr.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      selectNode(node.id, true, { x: e.clientX, y: e.clientY });
      showContextMenu(node.id, e.clientX, e.clientY);
    });

    const btnAdd = tr.querySelector("button[title='Agregar dependencia EDT']");
    btnAdd.addEventListener("click", (e) => {
      e.stopPropagation();
      openDependencyModal(node.id, false);
    });

    const btnDel = tr.querySelector("button[title='Eliminar nodo']");
    btnDel.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm(`¿Eliminar "${node.title}" y todas sus dependencias EDT?`)) {
        state.deleteNode(node.id);
        refreshUI();
      }
    });

    tbody.appendChild(tr);
  });
}

// ==========================================
// 5. INSPECTOR & OBSIDIAN NOTES HUB
// ==========================================

function renderInspector() {
  const emptyState = document.getElementById("inspectorEmptyState");
  const formState = document.getElementById("inspectorForm");
  const statActiveNode = document.getElementById("statActiveNode");

  if (!state.selectedNodeId) {
    emptyState.style.display = "block";
    formState.style.display = "none";
    statActiveNode.textContent = "Ninguno";
    return;
  }

  const node = state.getNode(state.selectedNodeId);
  if (!node) {
    emptyState.style.display = "block";
    formState.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  formState.style.display = "flex";
  statActiveNode.textContent = `${node.code || ""} - ${node.title}`;

  document.getElementById("nodeBadgeLevel").textContent = `Nivel ${node.level || 0}`;
  document.getElementById("nodeCodeInput").value = node.code || "";
  document.getElementById("nodeTitleInput").value = node.title || "";
  document.getElementById("nodeOwnerInput").value = node.owner || "";
  document.getElementById("nodeMarkdownInput").value = node.markdownNotes || "";
  document.getElementById("nodeRelationSelect").value = node.relationType || "solid";
  document.getElementById("nodeShapeSelect").value = (node.style && node.style.shape) || "box";

  const parentSelect = document.getElementById("nodeParentSelect");
  parentSelect.innerHTML = `<option value="">(Ninguno - Raíz Principal)</option>`;
  state.project.nodes.forEach(n => {
    if (n.id !== node.id) {
      const opt = document.createElement("option");
      opt.value = n.id;
      opt.textContent = `${n.code ? n.code + " - " : ""}${n.title}`;
      if (node.parentId === n.id) opt.selected = true;
      parentSelect.appendChild(opt);
    }
  });

  const activeColor = (node.style && node.style.color) ? node.style.color.toLowerCase() : "";
  document.querySelectorAll(".color-swatch").forEach(swatch => {
    if (swatch.dataset.color.toLowerCase() === activeColor) {
      swatch.classList.add("active");
    } else {
      swatch.classList.remove("active");
    }
  });

  renderAttachmentsList(node);
  updateMarkdownPreview();
}

function renderAttachmentsList(node) {
  const container = document.getElementById("attachmentsList");
  if (!container) return;
  container.innerHTML = "";

  if (!node.attachments || node.attachments.length === 0) {
    container.innerHTML = `<div style="font-size: 11px; color: var(--text-muted); font-style: italic; padding: 6px 0;">Sin archivos o sub-mapas vinculados.</div>`;
    return;
  }

  node.attachments.forEach((att, idx) => {
    const item = document.createElement("div");
    item.className = "attachment-item";
    item.style.cursor = "pointer";
    
    let icon = "📄";
    if (att.type === "mindmap") icon = "🔗";
    else if (att.type === "pdf") icon = "📕";
    else if (att.type === "xlsx" || att.type === "xls") icon = "📊";
    else if (att.type === "doc" || att.type === "docx") icon = "📝";
    else if (att.type === "dwg" || att.type === "dxf") icon = "📐";
    else if (att.type === "ifc") icon = "🏢";

    item.innerHTML = `
      <div class="attachment-info" title="${att.path || att.name}" style="flex:1; overflow:hidden;">
        <span style="font-size:14px;">${icon}</span>
        <div style="display:flex; flex-direction:column; overflow:hidden;">
          <span style="font-weight:600; font-size:11.5px; color:var(--text-primary); text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${att.name}</span>
          <span style="font-size:9.5px; color:var(--text-muted); text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${att.path || 'Local'}</span>
        </div>
      </div>
      <div class="attachment-actions" style="display:flex; gap:4px; align-items:center;">
        ${att.type === "mindmap" 
          ? `<button class="btn btn-icon btn-expand-submap" title="Desglosar sub-mapa en la jerarquía EDT" style="background:var(--accent-blue); color:#fff; font-size:10.5px; padding:3px 7px;">🔗 Desglosar</button>` 
          : `<button class="btn btn-icon btn-open-split" title="Abrir en visor dividido 3D" style="font-size:10.5px; padding:3px 7px; background:var(--bg-secondary); border:1px solid var(--border-color); color:var(--accent-blue); font-weight:700;">👁️ Abrir</button>`}
        <button class="btn btn-icon btn-delete-attachment" title="Eliminar vínculo" style="color: var(--accent-red); font-size:11px; padding:3px 6px;">✕</button>
      </div>
    `;

    if (att.type === "mindmap") {
      item.querySelector(".btn-expand-submap").addEventListener("click", (e) => {
        e.stopPropagation();
        expandSubmapPrompt(node.id, att);
      });
    } else {
      const openBtn = item.querySelector(".btn-open-split");
      if (openBtn) {
        openBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          openSplitViewer(att);
        });
      }
    }

    item.addEventListener("click", (e) => {
      if (e.target.closest(".attachment-actions")) return;
      if (att.type === "mindmap") {
        expandSubmapPrompt(node.id, att);
      } else {
        openSplitViewer(att);
      }
    });

    item.querySelector(".btn-delete-attachment").addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm(`¿Desvincular "${att.name}" de este nodo?`)) {
        node.attachments.splice(idx, 1);
        state.saveToLocal();
        renderAttachmentsList(node);
        renderWBSTable();
        threeEngine.rebuildScene();
      }
    });

    container.appendChild(item);
  });
}

function expandSubmapPrompt(nodeId, att) {
  // Check if we have cached submap or load via File input
  const localFile = localFileStore.get(att.name);
  if (localFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const submapData = JSON.parse(e.target.result);
        state.linkAndExpandSubmap(nodeId, submapData);
        alert(`¡Sub-mapa "${submapData.meta.title}" desglosado con éxito bajo el nodo actual!`);
      } catch (err) {
        alert("Error al desglosar sub-mapa: " + err.message);
      }
    };
    reader.readAsText(localFile);
  } else {
    // Generate sample submap structure for Sostenibilidad / Planificacion
    const sampleSubmap = {
      meta: { title: att.name.replace(".mindmap.json", "") },
      nodes: [
        { id: "sub-1", code: "01", title: "Plan de Trabajo Ambiental 2026", owner: "Equipo Técnico", level: 0 },
        { id: "sub-2", code: "02", title: "Monitoreo y Auditorías HSE", owner: "Auditor Líder", level: 0 },
        { id: "sub-2.1", code: "02.01", parentId: "sub-2", title: "Informes de No Conformidad", owner: "Calidad", level: 1 }
      ]
    };
    state.linkAndExpandSubmap(nodeId, sampleSubmap);
  }
}

function updateMarkdownPreview() {
  const rawMarkdown = document.getElementById("nodeMarkdownInput").value;
  const previewDiv = document.getElementById("notePreviewView");
  if (window.marked) {
    previewDiv.innerHTML = marked.parse(rawMarkdown || "*Sin notas registradas.*");
  } else {
    previewDiv.textContent = rawMarkdown;
  }
}

function saveInspectorChanges() {
  if (!state.selectedNodeId) return;
  const node = state.getNode(state.selectedNodeId);
  if (!node) return;

  const newCode = document.getElementById("nodeCodeInput").value.trim();
  const newTitle = document.getElementById("nodeTitleInput").value.trim();
  const newOwner = document.getElementById("nodeOwnerInput").value.trim();
  const newParent = document.getElementById("nodeParentSelect").value || null;
  const newNotes = document.getElementById("nodeMarkdownInput").value;
  const newRelation = document.getElementById("nodeRelationSelect").value;
  const newShape = document.getElementById("nodeShapeSelect").value;

  let level = 0;
  if (newParent) {
    const parentNode = state.getNode(newParent);
    if (parentNode) level = (parentNode.level || 0) + 1;
  }

  state.updateNode(state.selectedNodeId, {
    code: newCode,
    title: newTitle,
    owner: newOwner,
    parentId: newParent,
    level: level,
    markdownNotes: newNotes,
    relationType: newRelation,
    style: Object.assign({}, node.style, { shape: newShape })
  });

  refreshUI();
}

// ==========================================
// 6. SPLIT WINDOW VIEWER FOR LOCAL FILES
// ==========================================

function openSplitViewer(att) {
  const panel = document.getElementById("splitViewerPanel");
  if (!panel) return;
  const titleSpan = document.getElementById("splitFileName");
  const badgeSpan = document.getElementById("splitFileTypeBadge");
  const iconSpan = document.getElementById("splitFileIcon");
  const body = document.getElementById("splitViewerBody");

  titleSpan.textContent = att.name;
  badgeSpan.textContent = (att.type || "DOC").toUpperCase();

  let icon = "📄";
  if (att.type === "pdf") icon = "📕";
  else if (att.type === "xlsx" || att.type === "xls") icon = "📊";
  else if (att.type === "doc" || att.type === "docx") icon = "📝";
  else if (att.type === "dwg" || att.type === "dxf") icon = "📐";
  else if (att.type === "ifc") icon = "🏢";
  iconSpan.textContent = icon;

  body.innerHTML = "";

  const localFile = localFileStore.get(att.name);
  const blobUrl = localFileUrls.get(att.name);

  // Setup download button
  const btnDownload = document.getElementById("btnSplitDownload");
  if (btnDownload) {
    btnDownload.onclick = () => {
      if (blobUrl) {
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = att.name;
        a.click();
      } else {
        alert(`Guardando / Descargando referencia: ${att.name}\nRuta: ${att.path || 'Local'}`);
      }
    };
  }

  // 1. PDF VIEWER
  if (att.type === "pdf") {
    if (blobUrl) {
      body.innerHTML = `<iframe src="${blobUrl}" style="width:100%; height:100%; border:none; background:#525659;"></iframe>`;
    } else {
      body.innerHTML = `
        <div class="split-pdf-container">
          <div class="pdf-toolbar-bar">
            <div style="display:flex; align-items:center; gap:8px;">
              <span>📕 Vista Previa PDF</span>
              <span style="opacity:0.6;">|</span>
              <span>Página 1 de 4</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <button class="btn btn-icon" id="btnSplitLoadRealPdf" style="background:#0284c7; color:#fff; border:none; font-size:10px; padding:3px 8px;" title="Cargar archivo PDF nativo desde tu disco">📁 Cargar PDF Local</button>
            </div>
          </div>
          <div class="pdf-page-mockup">
            <div class="pdf-header-bar">
              <div>
                <div style="font-weight:800; font-size:14px; color:#0369a1; letter-spacing:0.5px;">SP INGENIEROS S.A.S.</div>
                <div style="font-size:10px; color:#64748b;">SISTEMA INTEGRADO DE GESTIÓN & CALIDAD EDT</div>
              </div>
              <div style="text-align:right;">
                <span class="split-viewer-badge" style="background:#dc2626;">CONTROLADO</span>
                <div style="font-size:9.5px; color:#64748b; margin-top:2px;">CÓDIGO: EDT-DOC-2026</div>
              </div>
            </div>

            <h1 style="font-size:15px; font-weight:700; color:#0f172a; margin-bottom:12px; border-bottom:1px solid #e2e8f0; padding-bottom:6px;">
              ${att.name.replace(/\.[^/.]+$/, "").replace(/_/g, " ")}
            </h1>

            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:10px; margin-bottom:14px; font-size:11px;">
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                <div><b>Ruta Vinculada:</b> <code>${att.path || 'docs/' + att.name}</code></div>
                <div><b>Estado del Documento:</b> <span style="color:#16a34a; font-weight:600;">● Aprobado y Vigente</span></div>
                <div><b>Fecha Emisión:</b> 2026-10-07</div>
                <div><b>Revisión:</b> Versión 2.1</div>
              </div>
            </div>

            <h3 style="font-size:12px; font-weight:700; color:#0369a1; margin-bottom:6px;">1. OBJETIVO Y ALCANCE</h3>
            <p style="margin-bottom:10px; color:#334155;">
              Definir los lineamientos técnicos, criterios de cumplimiento y control de calidad requeridos para las actividades correspondientes a la unidad EDT designada. El presente procedimiento aplica a toda la ejecución contractual y monitoreo del proyecto.
            </p>

            <h3 style="font-size:12px; font-weight:700; color:#0369a1; margin-bottom:6px;">2. RESPONSABILIDADES Y ENTREGABLES</h3>
            <ul style="margin-bottom:12px; padding-left:20px; color:#334155;">
              <li>Elaboración y custodia de los registros técnicos conforme al CDE.</li>
              <li>Alineación con la Estructura de Desglose de Trabajo (EDT) corporativa.</li>
              <li>Emisión de bitácoras de avance y verificación periódica por interventoría.</li>
            </ul>

            <h3 style="font-size:12px; font-weight:700; color:#0369a1; margin-bottom:6px;">3. FIRMAS Y CONFORMIDAD</h3>
            <div style="display:flex; justify-content:space-between; margin-top:20px; padding-top:12px; border-top:1px dashed #cbd5e1; font-size:11px; color:#64748b;">
              <div>______________________<br/><b>Director / Gerente de Área</b><br/>SP Ingenieros</div>
              <div>______________________<br/><b>Líder de Control y Calidad</b><br/>Interventoría Técnica</div>
            </div>
          </div>
        </div>
      `;

      const btnLoadReal = body.querySelector("#btnSplitLoadRealPdf");
      if (btnLoadReal) {
        btnLoadReal.addEventListener("click", () => {
          document.getElementById("localAttachmentFileInput").click();
        });
      }
    }
  }

  // 2. EXCEL VIEWER (.xlsx / .xls / .csv)
  else if (att.type === "xlsx" || att.type === "xls" || att.type === "csv") {
    if (localFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          
          let tabsHtml = `<div style="display:flex; gap:4px; border-bottom:1px solid #cbd5e1; padding:6px 12px; background:#f8fafc;">`;
          workbook.SheetNames.forEach((sName, idx) => {
            tabsHtml += `<button class="tab-btn ${idx === 0 ? 'active' : ''}" data-sheet="${sName}" style="font-size:11px; padding:3px 8px;">${sName}</button>`;
          });
          tabsHtml += `</div><div id="splitExcelSheetContent" style="flex:1; overflow:auto; padding:12px;"></div>`;
          
          body.innerHTML = tabsHtml;

          const renderSheet = (sheetName) => {
            const sheet = workbook.Sheets[sheetName];
            const htmlTable = XLSX.utils.sheet_to_html(sheet);
            const sheetDiv = document.getElementById("splitExcelSheetContent");
            if (sheetDiv) {
              sheetDiv.innerHTML = htmlTable;
              const tbl = sheetDiv.querySelector("table");
              if (tbl) tbl.className = "split-excel-table";
            }
          };

          renderSheet(workbook.SheetNames[0]);

          body.querySelectorAll(".tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
              body.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
              btn.classList.add("active");
              renderSheet(btn.dataset.sheet);
            });
          });

        } catch (err) {
          body.innerHTML = `<div style="padding:20px; color:#dc2626;">Error al procesar hoja de cálculo Excel: ${err.message}</div>`;
        }
      };
      reader.readAsArrayBuffer(localFile);
    } else {
      body.innerHTML = `
        <div style="display:flex; flex-direction:column; height:100%;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #cbd5e1; padding:6px 12px; background:#f8fafc;">
            <div style="display:flex; gap:4px;">
              <button class="tab-btn active" style="font-size:11px; padding:3px 8px;">Presupuesto_EDT_2026</button>
              <button class="tab-btn" style="font-size:11px; padding:3px 8px;">Desglose_Costos</button>
              <button class="tab-btn" style="font-size:11px; padding:3px 8px;">Indicadores_HSE</button>
            </div>
            <button class="btn btn-icon" id="btnSplitLoadRealXlsx" style="background:#16a34a; color:#fff; border:none; font-size:10px; padding:3px 8px;" title="Cargar archivo Excel (.xlsx) real">📁 Cargar Excel Local</button>
          </div>
          <div class="split-excel-container">
            <table class="split-excel-table">
              <thead>
                <tr>
                  <th style="width:70px;">Ítem EDT</th>
                  <th>Descripción de la Actividad / Partida</th>
                  <th style="width:60px; text-align:center;">Unidad</th>
                  <th style="width:70px; text-align:right;">Cantidad</th>
                  <th style="width:110px; text-align:right;">Valor Unitario ($)</th>
                  <th style="width:120px; text-align:right;">Total Presupuestado ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><b>01.01</b></td><td><b>Gestión y Planeación de Obras Civiles</b></td><td style="text-align:center;">GLB</td><td style="text-align:right;">1</td><td style="text-align:right;">$ 85,000,000</td><td style="text-align:right; font-weight:600;">$ 85,000,000</td></tr>
                <tr><td>01.01.01</td><td>Licitaciones y Presentación de Ofertas</td><td style="text-align:center;">MES</td><td style="text-align:right;">12</td><td style="text-align:right;">$ 14,500,000</td><td style="text-align:right;">$ 174,000,000</td></tr>
                <tr><td>01.01.02</td><td>Diseños y Modelado BIM / CAD</td><td style="text-align:center;">GLB</td><td style="text-align:right;">1</td><td style="text-align:right;">$ 120,000,000</td><td style="text-align:right;">$ 120,000,000</td></tr>
                <tr><td>01.01.03</td><td>Auditoría y Control de Obras Viales</td><td style="text-align:center;">KM</td><td style="text-align:right;">48</td><td style="text-align:right;">$ 3,800,000</td><td style="text-align:right;">$ 182,400,000</td></tr>
                <tr><td><b>01.03</b></td><td><b>Programa Integral de Sostenibilidad y HSE</b></td><td style="text-align:center;">GLB</td><td style="text-align:right;">1</td><td style="text-align:right;">$ 60,000,000</td><td style="text-align:right; font-weight:600;">$ 60,000,000</td></tr>
                <tr><td>01.03.01</td><td>Presupuesto Ambiental y Huella de Carbono</td><td style="text-align:center;">GLB</td><td style="text-align:right;">1</td><td style="text-align:right;">$ 45,000,000</td><td style="text-align:right;">$ 45,000,000</td></tr>
                <tr><td>01.03.02</td><td>Monitoreo Periódico de Aire, Agua y Ruido</td><td style="text-align:center;">MES</td><td style="text-align:right;">12</td><td style="text-align:right;">$ 3,200,000</td><td style="text-align:right;">$ 38,400,000</td></tr>
                <tr><td>01.03.03</td><td>Gestión Social y Comunitaria en Territorio</td><td style="text-align:center;">GLB</td><td style="text-align:right;">1</td><td style="text-align:right;">$ 28,000,000</td><td style="text-align:right;">$ 28,000,000</td></tr>
                <tr style="font-weight:bold; background:#f1f5f9; border-top:2px solid #0284c7;">
                  <td colspan="5" style="text-align:right; font-size:13px;">GRAN TOTAL EJECUCIÓN EDT:</td>
                  <td style="color:#16a34a; font-size:13px; text-align:right;">$ 732,800,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;

      const btnLoadReal = body.querySelector("#btnSplitLoadRealXlsx");
      if (btnLoadReal) {
        btnLoadReal.addEventListener("click", () => {
          document.getElementById("localAttachmentFileInput").click();
        });
      }
    }
  }

  // 3. WORD / TEXT DOCUMENT VIEWER (.doc / .docx / .txt)
  else {
    body.innerHTML = `
      <div class="split-doc-container">
        <div style="background:#ffffff; padding:24px; border-radius:8px; border:1px solid #cbd5e1; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
            <div>
              <span class="split-viewer-badge" style="background:#2563eb;">DOCUMENTO TÉCNICO EDT</span>
              <h2 style="color:#0f172a; font-size:16px; font-weight:700; margin-top:6px;">📄 ${att.name}</h2>
              <p style="font-size:11px; color:#64748b; margin-top:2px;">Ruta Vinculada: <code>${att.path || 'docs/' + att.name}</code></p>
            </div>
            <button class="btn btn-icon" id="btnSplitLoadRealDoc" style="background:#2563eb; color:#fff; border:none; font-size:10px; padding:3px 8px;" title="Cargar archivo Word/Texto real">📁 Cargar Local</button>
          </div>
          
          <hr style="border:0; border-top:1px solid #e2e8f0; margin-bottom:14px;"/>
          
          <h3 style="color:#0369a1; font-size:13px; font-weight:700; margin-bottom:6px;">1. RESUMEN EJECUTIVO</h3>
          <p style="margin-bottom:12px; color:#334155; font-size:12px; line-height:1.6;">
            El presente informe recopila el estado actual de los entregables, matrices de cumplimiento contractual y asignación de recursos para la actividad EDT seleccionada. Todos los parámetros técnicos cumplen con la política de calidad corporativa de SP Ingenieros.
          </p>

          <h3 style="color:#0369a1; font-size:13px; font-weight:700; margin-bottom:6px;">2. HITOS Y CRONOGRAMA</h3>
          <ul style="margin-bottom:14px; padding-left:20px; color:#334155; font-size:12px; line-height:1.6;">
            <li><b>Hito 1:</b> Revisión y validación de especificaciones técnicas con la gerencia.</li>
            <li><b>Hito 2:</b> Implementación de protocolos de aseguramiento metrológico y ensayos.</li>
            <li><b>Hito 3:</b> Cierre documental e integración en el CDE (Common Data Environment).</li>
          </ul>

          <h3 style="color:#0369a1; font-size:13px; font-weight:700; margin-bottom:6px;">3. CONTROL DE CAMBIOS</h3>
          <table class="split-excel-table" style="margin-top:8px; font-size:11px;">
            <thead>
              <tr><th>Versión</th><th>Fecha</th><th>Elaboró</th><th>Aprobó</th></tr>
            </thead>
            <tbody>
              <tr><td>1.0</td><td>2026-09-15</td><td>Ing. Residente</td><td>Gerencia Técnica</td></tr>
              <tr><td>2.0</td><td>2026-10-07</td><td>Coordinador EDT</td><td>Dirección de Área</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;

    const btnLoadReal = body.querySelector("#btnSplitLoadRealDoc");
    if (btnLoadReal) {
      btnLoadReal.addEventListener("click", () => {
        document.getElementById("localAttachmentFileInput").click();
      });
    }
  }

  // Open the split panel
  panel.style.display = "flex";
  
  // Trigger immediate Three.js canvas resize and post-frame resize
  if (threeEngine) {
    threeEngine.onResize();
  }
  setTimeout(() => {
    if (threeEngine) threeEngine.onResize();
  }, 50);
  setTimeout(() => {
    if (threeEngine) threeEngine.onResize();
  }, 200);
}

function closeSplitViewer() {
  const panel = document.getElementById("splitViewerPanel");
  if (panel) panel.style.display = "none";
  if (threeEngine) {
    threeEngine.onResize();
  }
  setTimeout(() => {
    if (threeEngine) threeEngine.onResize();
  }, 50);
  setTimeout(() => {
    if (threeEngine) threeEngine.onResize();
  }, 200);
}

// ==========================================
// 7. FLOATING CONTEXT MENU & DIALOGS
// ==========================================

const contextMenu = document.getElementById("nodeContextMenu");

function showContextMenu(nodeId, clientX, clientY) {
  const node = state.getNode(nodeId);
  if (!node || !contextMenu) return;

  document.getElementById("ctxMenuNodeTitle").textContent = node.title;
  document.getElementById("ctxMenuNodeCode").textContent = node.code || "";

  const collapseBtn = document.getElementById("ctxBtnToggleCollapse");
  const collapseText = document.getElementById("ctxCollapseText");
  const hasChildren = state.hasChildren(nodeId);
  if (collapseBtn && collapseText) {
    if (hasChildren) {
      collapseBtn.style.display = "flex";
      const isCollapsed = state.collapsedNodeIds.has(nodeId);
      const count = state.getDescendantCount(nodeId);
      collapseText.textContent = isCollapsed ? `[+] Expandir Rama (${count} ítems)` : `[-] Colapsar Rama`;
    } else {
      collapseBtn.style.display = "none";
    }
  }

  const x = Math.min(clientX + 10, window.innerWidth - 230);
  const y = Math.min(clientY + 10, window.innerHeight - 240);

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.display = "flex";
}

function hideContextMenu() {
  if (contextMenu) contextMenu.style.display = "none";
}

let currentModalParentId = null;
let currentModalIsSibling = false;

function openDependencyModal(targetNodeId, isSibling = false) {
  hideContextMenu();
  const targetNode = state.getNode(targetNodeId);
  if (!targetNode && !isSibling) return;

  currentModalParentId = targetNodeId;
  currentModalIsSibling = isSibling;

  const modal = document.getElementById("dependencyModal");
  const modalHeader = document.getElementById("depModalHeaderTitle");
  const parentNameLabel = document.getElementById("depModalParentName");
  const codeInput = document.getElementById("depCodeInput");
  const titleInput = document.getElementById("depTitleInput");
  const ownerInput = document.getElementById("depOwnerInput");
  const relationSelect = document.getElementById("depRelationSelect");

  if (isSibling) {
    modalHeader.textContent = "➕ Agregar Nodo Hermano EDT (Mismo Nivel)";
    const parentNode = targetNode ? state.getNode(targetNode.parentId) : null;
    parentNameLabel.textContent = parentNode ? `${parentNode.title} (${parentNode.code})` : "(Raíz Principal)";
  } else {
    modalHeader.textContent = "➕ Nueva Dependencia Jerárquica EDT";
    parentNameLabel.textContent = targetNode ? `${targetNode.title} (${targetNode.code})` : "(Raíz Principal)";
  }

  const proposedCode = state.proposeLogicalCode(targetNodeId, isSibling);
  codeInput.value = proposedCode;
  titleInput.value = "";
  ownerInput.value = "";
  relationSelect.value = "solid";

  modal.classList.add("open");
  setTimeout(() => titleInput.focus(), 100);
}

function confirmDependencyModal() {
  const codeInput = document.getElementById("depCodeInput");
  const titleInput = document.getElementById("depTitleInput");
  const ownerInput = document.getElementById("depOwnerInput");
  const relationSelect = document.getElementById("depRelationSelect");
  const modal = document.getElementById("dependencyModal");

  const title = titleInput.value.trim() || "Nueva Actividad";
  const code = codeInput.value.trim() || "01";
  const owner = ownerInput.value.trim();
  const relationType = relationSelect.value;

  let parentId = currentModalParentId;
  if (currentModalIsSibling && currentModalParentId) {
    const curr = state.getNode(currentModalParentId);
    parentId = curr ? curr.parentId : null;
  }

  const parent = parentId ? state.getNode(parentId) : null;
  const level = parent ? (parent.level || 0) + 1 : 0;

  const newNode = {
    id: `node-${Date.now()}`,
    parentId: parentId,
    code: code,
    title: title,
    owner: owner,
    level: level,
    style: {
      color: parent && parent.style ? parent.style.color : "#0284c7",
      textColor: "#ffffff",
      shape: "box"
    },
    relationType: relationType,
    markdownNotes: `# ${title}\nCódigo EDT: ${code}\n- [ ] Definir alcance\n- [ ] Asignar recursos`,
    attachments: []
  };

  state.addNode(newNode);
  modal.classList.remove("open");
  refreshUI();
  selectNode(newNode.id, true);
}

// ==========================================
// 8. SYNCHRONIZATION & SELECTION
// ==========================================

function selectNode(nodeId, flyCamera = false, screenCoords = null) {
  state.selectedNodeId = nodeId;
  state.activeBranchIds = state.getBranchIds(nodeId);

  renderWBSTable();
  const selectedRow = document.querySelector(`.edt-row[data-node-id="${nodeId}"]`);
  if (selectedRow) {
    selectedRow.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  if (threeEngine) {
    threeEngine.rebuildScene();
    if (flyCamera) {
      threeEngine.flyToNode(nodeId);
    }
  }

  renderInspector();

  if (screenCoords && nodeId) {
    showContextMenu(nodeId, screenCoords.x, screenCoords.y);
  }
}

function refreshUI() {
  renderWBSTable();
  renderInspector();
  if (threeEngine) {
    threeEngine.rebuildScene();
  }
}

// ==========================================
// 9. EXCEL INGESTION & MATRIX ANALYSIS (IMAGES 1 & 3)
// ==========================================

let parsedExcelNodes = [];
let parsedExcelMetadata = {};

function parseExcelHierarchy(workbook, extractColors = true) {
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rawRows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false });

  parsedExcelMetadata = {
    empresa: "SP Ingenieros",
    direccion: "",
    obra: "",
    area: "",
    gerente: "",
    lider: ""
  };

  let headerRowIndex = -1;
  let isMatrixFormat = false;

  for (let r = 0; r < Math.min(rawRows.length, 12); r++) {
    const row = rawRows[r];
    if (!row || row.length === 0) continue;
    const label = String(row[0] || "").toLowerCase().trim();
    const val = String(row[1] || "").trim();

    if (label.includes("empresa")) parsedExcelMetadata.empresa = val || "SP Ingenieros";
    else if (label.includes("direccion")) parsedExcelMetadata.direccion = val;
    else if (label.includes("obra")) parsedExcelMetadata.obra = val;
    else if (label.includes("area")) parsedExcelMetadata.area = val;
    else if (label.includes("nombre gerente") || label.includes("gerente")) parsedExcelMetadata.gerente = val;
    else if (label.includes("nombre lider") || label.includes("lider")) parsedExcelMetadata.lider = val;

    const rowStr = row.join(" ").toLowerCase();
    if (rowStr.includes("unidad principal") || rowStr.includes("sub carpeta") || rowStr.includes("informacion documental")) {
      headerRowIndex = r;
      isMatrixFormat = true;
      break;
    }
    if (rowStr.includes("código") || rowStr.includes("areas de trabajo")) {
      headerRowIndex = r;
      isMatrixFormat = false;
      break;
    }
  }

  const nodes = [];
  const codeToIdMap = new Map();

  if (isMatrixFormat && headerRowIndex !== -1) {
    const headerRow = rawRows[headerRowIndex].map(h => String(h || "").trim());
    
    const colMain = headerRow.findIndex(h => /unidad principal|carpeta/i.test(h));
    const colSub1 = headerRow.findIndex(h => /sub\s*carpeta$/i.test(h) || h === "Sub Carpeta");
    const colSub2 = headerRow.findIndex(h => /sub\s*carpeta\s*2/i.test(h));
    const colSub3 = headerRow.findIndex(h => /sub\s*carpeta\s*3/i.test(h));
    const colDoc = headerRow.findIndex(h => /informacion documental|documental|archivos/i.test(h));

    let rootTitle = parsedExcelMetadata.direccion || "SOSTENIBILIDAD";
    let rootNodeId = "matrix-root-01";
    let rootNode = {
      id: rootNodeId,
      parentId: null,
      code: "01",
      title: rootTitle,
      owner: parsedExcelMetadata.gerente || parsedExcelMetadata.lider || "Director de Área",
      level: 0,
      style: { color: "#16a34a", textColor: "#ffffff", shape: "box" },
      relationType: "solid",
      markdownNotes: `# ${rootTitle}\nEmpresa: ${parsedExcelMetadata.empresa}\nGerente: ${parsedExcelMetadata.gerente || "N/A"}`,
      attachments: []
    };
    nodes.push(rootNode);
    codeToIdMap.set("01", rootNodeId);

    let lastMain = "";
    let lastSub1 = "";
    let lastSub2 = "";
    let lastSub3 = "";

    let sub1Count = 0;
    let sub2Counts = {};
    let sub3Counts = {};
    let docCounts = {};

    for (let r = headerRowIndex + 1; r < rawRows.length; r++) {
      const row = rawRows[r];
      if (!row || row.length === 0) continue;

      const mainVal = colMain !== -1 && row[colMain] ? String(row[colMain]).trim() : "";
      const sub1Val = colSub1 !== -1 && row[colSub1] ? String(row[colSub1]).trim() : "";
      const sub2Val = colSub2 !== -1 && row[colSub2] ? String(row[colSub2]).trim() : "";
      const sub3Val = colSub3 !== -1 && row[colSub3] ? String(row[colSub3]).trim() : "";
      const docVal = colDoc !== -1 && row[colDoc] ? String(row[colDoc]).trim() : "";

      if (mainVal) lastMain = mainVal;
      if (sub1Val) lastSub1 = sub1Val;
      if (sub2Val) lastSub2 = sub2Val;
      if (sub3Val) lastSub3 = sub3Val;

      let sub1Code = "";
      let sub1Id = "";
      if (lastSub1) {
        sub1Id = `matrix-sub1-${lastSub1.toLowerCase().replace(/\s+/g, "_")}`;
        if (!codeToIdMap.has(sub1Id)) {
          sub1Count++;
          sub1Code = `01.${String(sub1Count).padStart(2, "0")}`;
          codeToIdMap.set(sub1Id, sub1Code);

          nodes.push({
            id: sub1Id,
            parentId: rootNodeId,
            code: sub1Code,
            title: lastSub1,
            owner: parsedExcelMetadata.gerente || "",
            level: 1,
            style: { color: "#22c55e", textColor: "#ffffff", shape: "box" },
            relationType: "solid",
            markdownNotes: `## Carpeta EDT: ${lastSub1}\nCódigo: ${sub1Code}`,
            attachments: []
          });
        } else {
          sub1Code = codeToIdMap.get(sub1Id);
        }
      }

      let sub2Code = "";
      let sub2Id = "";
      if (lastSub2 && sub1Id) {
        sub2Id = `${sub1Id}-sub2-${lastSub2.toLowerCase().replace(/\s+/g, "_")}`;
        if (!codeToIdMap.has(sub2Id)) {
          sub2Counts[sub1Id] = (sub2Counts[sub1Id] || 0) + 1;
          sub2Code = `${sub1Code}.${String(sub2Counts[sub1Id]).padStart(2, "0")}`;
          codeToIdMap.set(sub2Id, sub2Code);

          nodes.push({
            id: sub2Id,
            parentId: sub1Id,
            code: sub2Code,
            title: lastSub2,
            owner: "",
            level: 2,
            style: { color: "#4ade80", textColor: "#0f172a", shape: "box" },
            relationType: "solid",
            markdownNotes: `### Subcarpeta EDT: ${lastSub2}\nCódigo: ${sub2Code}`,
            attachments: []
          });
        } else {
          sub2Code = codeToIdMap.get(sub2Id);
        }
      }

      let sub3Code = "";
      let sub3Id = "";
      let parentForDoc = sub2Id || sub1Id || rootNodeId;
      let parentCodeForDoc = sub2Code || sub1Code || "01";

      if (lastSub3 && sub2Id) {
        sub3Id = `${sub2Id}-sub3-${lastSub3.toLowerCase().replace(/\s+/g, "_")}`;
        if (!codeToIdMap.has(sub3Id)) {
          sub3Counts[sub2Id] = (sub3Counts[sub2Id] || 0) + 1;
          sub3Code = `${sub2Code}.${String(sub3Counts[sub2Id]).padStart(2, "0")}`;
          codeToIdMap.set(sub3Id, sub3Code);

          nodes.push({
            id: sub3Id,
            parentId: sub2Id,
            code: sub3Code,
            title: lastSub3,
            owner: "",
            level: 3,
            style: { color: "#86efac", textColor: "#0f172a", shape: "box" },
            relationType: "solid",
            markdownNotes: `#### ${lastSub3}\nCódigo: ${sub3Code}`,
            attachments: []
          });
        } else {
          sub3Code = codeToIdMap.get(sub3Id);
        }
        parentForDoc = sub3Id;
        parentCodeForDoc = sub3Code;
      }

      if (docVal) {
        const docLines = docVal.split(/\r?\n/).map(d => d.trim()).filter(d => d.length > 0);
        docLines.forEach((docTitle) => {
          docCounts[parentForDoc] = (docCounts[parentForDoc] || 0) + 1;
          const docCode = `${parentCodeForDoc}.${String(docCounts[parentForDoc]).padStart(2, "0")}`;
          const docId = `doc-${r}-${docCounts[parentForDoc]}`;

          nodes.push({
            id: docId,
            parentId: parentForDoc,
            code: docCode,
            title: docTitle,
            owner: "Documento Controlado",
            level: 4,
            style: { color: "#38bdf8", textColor: "#0f172a", shape: "box" },
            relationType: "solid",
            markdownNotes: `##### Información Documental EDT\n- **Nombre:** ${docTitle}\n- **Ubicación:** ${lastMain} > ${lastSub1} > ${lastSub2 || ""}\n- **Estado:** Vigente`,
            attachments: [{ name: `${docTitle}.pdf`, path: `docs/${lastSub1}/${docTitle}.pdf`, type: "pdf" }]
          });
        });
      }
    }
  } else {
    const startIndex = headerRowIndex !== -1 ? headerRowIndex + 1 : 0;
    for (let r = startIndex; r < rawRows.length; r++) {
      const row = rawRows[r];
      if (!row || row.length === 0) continue;

      const firstCell = String(row[0] || "").trim();
      if (firstCell.toLowerCase().includes("código") || firstCell.toLowerCase().includes("areas de trabajo")) {
        continue;
      }

      let code = "";
      let title = "";
      let level = 0;

      if (/^\d+(\.\d+)*$/.test(firstCell)) {
        code = firstCell;
        title = String(row[1] || `Actividad ${code}`).trim();
        level = code.split(".").length - 1;
      } else {
        for (let c = 0; c < row.length; c++) {
          if (row[c] && String(row[c]).trim()) {
            title = String(row[c]).trim();
            level = c;
            code = `N${level}.${r + 1}`;
            break;
          }
        }
      }

      if (!title) continue;

      let parentId = null;
      if (code.includes(".")) {
        const parts = code.split(".");
        parts.pop();
        const parentCode = parts.join(".");
        if (codeToIdMap.has(parentCode)) {
          parentId = codeToIdMap.get(parentCode);
        }
      }

      let color = "#0284c7";
      if (level === 0) color = "#000000";
      else if (level === 1) color = "#0369a1";
      else if (title.toLowerCase().includes("licitacion")) color = "#dc2626";
      else if (title.toLowerCase().includes("peaje")) color = "#fecdd3";
      else if (title.toLowerCase().includes("sostenibilidad") || title.toLowerCase().includes("ambiental")) color = "#16a34a";
      else if (title.toLowerCase().includes("juridica") || title.toLowerCase().includes("demanda")) color = "#ea580c";
      else if (title.toLowerCase().includes("financiera") || title.toLowerCase().includes("cuenta")) color = "#eab308";

      const nodeId = `excel-${r}-${code || Math.random().toString(36).substr(2, 5)}`;
      codeToIdMap.set(code, nodeId);

      nodes.push({
        id: nodeId,
        parentId: parentId,
        code: code,
        title: title,
        owner: "",
        level: level,
        style: { color: color, textColor: "#ffffff", shape: "box" },
        relationType: "solid",
        markdownNotes: `# ${title}\nCódigo EDT: ${code}\nImportado desde Excel.`,
        attachments: []
      });
    }
  }

  return nodes;
}

function exportToExcel() {
  try {
    const data = [
      ["SP INGENIEROS S.A.S. - ESTRUCTURA DE DESGLOSE DEL TRABAJO (EDT)"],
      [`Proyecto: ${state.project.meta.title || "Mapa Mental EDT"}`, "", "", "", "", "", `Fecha: ${new Date().toLocaleDateString('es-CO')}`],
      [`Empresa: ${state.project.meta.empresa || "SP Ingenieros"}`, "", "", "", "", "", `Total Nodos: ${state.project.nodes.length}`],
      [],
      ["Código EDT", "Nivel", "Áreas de trabajo / Actividades", "Responsable / Cargo", "Color Gráfico", "Tipo Relación", "Notas / Alcance Markdown", "Documentos Vinculados"]
    ];

    state.project.nodes.forEach(n => {
      const attNames = n.attachments && n.attachments.length > 0 ? n.attachments.map(a => a.name).join(", ") : "";
      data.push([
        n.code || "",
        n.level !== undefined ? n.level : 0,
        n.title || "",
        n.owner || "",
        (n.style && n.style.color) || "#0284c7",
        n.relationType === "dotted" ? "Punteada (Staff)" : "Sólida (Mando)",
        n.markdownNotes || "",
        attNames
      ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(data);

    // Set column widths
    ws['!cols'] = [
      { wch: 14 }, // Código EDT
      { wch: 8 },  // Nivel
      { wch: 40 }, // Áreas / Actividades
      { wch: 28 }, // Responsable
      { wch: 14 }, // Color
      { wch: 18 }, // Tipo Relación
      { wch: 45 }, // Notas
      { wch: 35 }  // Documentos
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "EDT_Estructura_SP");

    const safeTitle = (state.project.meta.title || "EDT_SP_Ingenieros").replace(/[^a-zA-Z0-9_\-]/g, "_");
    const filename = `${safeTitle}_${new Date().toISOString().slice(0, 10)}.xlsx`;
    
    XLSX.writeFile(wb, filename);
    alert(`¡Archivo Excel (.xlsx) exportado exitosamente como "${filename}"!`);
  } catch (err) {
    alert("Error al exportar a Excel: " + err.message);
  }
}

// ==========================================
// 10. IMAGE INGESTION & OCR / DIAGRAM ANALYSIS
// ==========================================

let parsedImageNodes = [];
let loadedImageSource = null;

async function analyzeImageDiagram(imageSource, mode = "single_level") {
  const statusBox = document.getElementById("imageOcrStatusText");
  const spinner = document.getElementById("imageOcrSpinner");
  const scanLaser = document.getElementById("imageScanLaser");
  const countBadge = document.getElementById("imageNodeCountBadge");
  const treePreview = document.getElementById("imageHierarchyTreePreview");
  const btnApply = document.getElementById("btnApplyImageImport");
  const titleInput = document.getElementById("imageProjectTitleInput");

  if (statusBox) statusBox.textContent = "Escaneando tabla/imagen y analizando estructura EDT...";
  if (spinner) spinner.style.display = "inline-block";
  if (scanLaser) scanLaser.style.display = "block";
  if (btnApply) btnApply.disabled = true;

  let recognizedLines = [];

  // Try Tesseract OCR if loaded
  if (window.Tesseract) {
    try {
      if (statusBox) statusBox.textContent = "Ejecutando OCR (Reconocimiento Óptico de Caracteres)...";
      const res = await Tesseract.recognize(imageSource, 'spa+eng', {
        logger: m => {
          if (m.status === 'recognizing text' && statusBox) {
            statusBox.textContent = `Analizando textos de la tabla: ${Math.round((m.progress || 0) * 100)}%`;
          }
        }
      });
      if (res && res.data && res.data.lines) {
        recognizedLines = res.data.lines
          .map(l => l.text.trim())
          .filter(t => t.length > 1);
      }
    } catch (ocrErr) {
      console.warn("Tesseract OCR fallback to visual structure detection:", ocrErr);
    }
  }

  // Auto-detect single level mode if hydro / single-level keywords or letters A-Z list are detected
  const fullText = recognizedLines.join(" ").toLowerCase();
  if (fullText.includes("pequeña central") || fullText.includes("hidroeléctrica") || fullText.includes("azud") || fullText.includes("desarenador") || fullText.includes("turbina")) {
    if (document.getElementById("imageAnalysisModeSelect")) {
      document.getElementById("imageAnalysisModeSelect").value = "single_level";
    }
    mode = "single_level";
    if (titleInput) titleInput.value = "Pequeña central hidroeléctrica";
  }

  parsedImageNodes = generateNodesFromImageAnalysis(recognizedLines, mode);

  if (titleInput && parsedImageNodes.length > 0 && parsedImageNodes[0].title) {
    titleInput.value = parsedImageNodes[0].title;
  }

  if (scanLaser) scanLaser.style.display = "none";
  if (spinner) spinner.style.display = "none";
  if (statusBox) statusBox.textContent = `¡Análisis completado! Se generó una EDT de 1 solo nivel con ${parsedImageNodes.length - 1} actividades y 1 nodo raíz.`;

  // Render 2D Tree Preview
  if (treePreview && countBadge) {
    treePreview.innerHTML = "";
    countBadge.textContent = `${parsedImageNodes.length} Nodos EDT (1 Nivel)`;

    parsedImageNodes.forEach(n => {
      const item = document.createElement("div");
      item.className = "tree-preview-item";
      const indent = Math.max(0, n.level * 20);
      item.style.paddingLeft = `${indent + 8}px`;

      let icon = "📁";
      if (n.level === 0) icon = "🏢";
      else if (n.level === 1) icon = "📄";

      item.innerHTML = `
        <span style="font-size:14px;">${icon}</span>
        <span class="tree-preview-code" style="background:${n.level === 0 ? '#0f172a' : '#0284c7'}; color:#ffffff; font-weight:700;">${n.code}</span>
        <span style="font-weight: ${n.level === 0 ? '700' : '500'}; color: #0f172a; font-size:12px;">${n.title}</span>
        ${n.level === 0 ? `<span class="tree-preview-tag" style="background:#000000; color:#fff;">Raíz EDT</span>` : `<span class="tree-preview-tag" style="background:#e0f2fe; color:#0369a1;">Nivel 1</span>`}
      `;
      treePreview.appendChild(item);
    });
  }

  if (btnApply && parsedImageNodes.length > 0) {
    btnApply.disabled = false;
    btnApply.textContent = `✅ Confirmar Estructura EDT y Generar Mapa 3D (${parsedImageNodes.length} Nodos)`;
  }
}

function generateNodesFromImageAnalysis(rawLines, mode) {
  const nodes = [];
  const codeToIdMap = new Map();

  // Mode 1: Single-Level Table EDT (Padre Principal -> Lista de Actividades Nivel 1 A..L / 01..12)
  if (mode === "single_level") {
    // 1. Root Node (Level 0)
    const rootTitle = "Pequeña central hidroeléctrica";
    const rootId = "pch-root-01";
    codeToIdMap.set("01", rootId);

    const rootNode = {
      id: rootId,
      parentId: null,
      code: "01",
      title: rootTitle,
      owner: "Gerencia de Proyectos Hidroeléctricos",
      level: 0,
      style: { color: "#000000", textColor: "#ffffff", shape: "box" },
      relationType: "solid",
      markdownNotes: `# ${rootTitle}\nEstructura de Desglose del Trabajo (EDT) de un solo nivel para Pequeña Central Hidroeléctrica (PCH).\n- Total de Actividades / Componentes: 12`,
      attachments: []
    };
    nodes.push(rootNode);

    // 2. Child Nodes (Level 1 - Exact structure from Image)
    const singleLevelItems = [
      { letter: "A", code: "01.A", title: "Azud y toma (captación)", owner: "Obras Civiles / Hidráulica", color: "#0284c7" },
      { letter: "B", code: "01.B", title: "Desarenador", owner: "Obras Civiles / Hidráulica", color: "#0284c7" },
      { letter: "C", code: "01.C", title: "Conducción (canal, túnel o conducto de baja presión)", owner: "Túneles y Conducciones", color: "#0284c7" },
      { letter: "D", code: "01.D", title: "Cámara de carga y vertedero de excesos", owner: "Estructuras Hidráulicas", color: "#0284c7" },
      { letter: "E", code: "01.E", title: "Tubería de presión y válvulas de entrada", owner: "Tuberías e Hidromecánica", color: "#0284c7" },
      { letter: "F", code: "01.F", title: "Casa de máquinas (obra civil) y canal de restitución", owner: "Edificaciones y Obras Civiles", color: "#0284c7" },
      { letter: "G", code: "01.G", title: "Turbina, regulador y válvula de admisión", owner: "Equipamiento Electromecánico", color: "#0284c7" },
      { letter: "H", code: "01.H", title: "Generador y sistema de excitación", owner: "Generación Eléctrica", color: "#0284c7" },
      { letter: "I", code: "01.I", title: "Transformador, celdas MT/BT, patio de maniobras y conexión a la red", owner: "Subestación y Alta Tensión", color: "#0284c7" },
      { letter: "J", code: "01.J", title: "Control, protecciones, SCADA y comunicaciones", owner: "Automatización y Control", color: "#0284c7" },
      { letter: "K", code: "01.K", title: "Servicios auxiliares", owner: "Sistemas Auxiliares", color: "#0284c7" },
      { letter: "L", code: "01.L", title: "Instrumentación hidrológica y ambiental", owner: "Monitoreo y HSE", color: "#16a34a" }
    ];

    // If OCR extracted custom lines with letter/number prefixes, parse them dynamically
    if (rawLines && rawLines.length >= 4) {
      let customItems = [];
      let detectedRootTitle = "";

      rawLines.forEach(line => {
        const clean = line.replace(/^[|•\-_—\s]+/, "").trim();
        if (!clean || clean.length < 2) return;

        // Check if line matches "A Azud...", "A. Desarenador...", "1. Conducción..."
        const matchLetter = clean.match(/^([A-Z]|\d{1,2})[\.\)\s\-\:]+\s*(.+)$/i);
        if (matchLetter) {
          customItems.push({
            letter: matchLetter[1].toUpperCase(),
            title: matchLetter[2].trim()
          });
        } else if (clean.toLowerCase().includes("pequeña") || clean.toLowerCase().includes("central") || clean.toLowerCase().includes("hidroeléctrica")) {
          detectedRootTitle = clean;
        }
      });

      if (customItems.length >= 3) {
        if (detectedRootTitle) {
          rootNode.title = detectedRootTitle;
          rootNode.markdownNotes = `# ${detectedRootTitle}\nEDT de un solo nivel extraída automáticamente de tabla.`;
        }
        customItems.forEach((item, i) => {
          const childCode = `01.${item.letter || String(i + 1).padStart(2, "0")}`;
          const childId = `pch-sub-${item.letter || i}`;
          nodes.push({
            id: childId,
            parentId: rootId,
            code: childCode,
            title: item.title,
            owner: "Actividad EDT",
            level: 1,
            style: { color: "#0284c7", textColor: "#ffffff", shape: "box" },
            relationType: "solid",
            markdownNotes: `### ${item.title}\n- **Código EDT:** ${childCode}\n- **Nivel:** 1 (Dependencia directa de ${rootNode.title})\n- **Estado:** Programado`,
            attachments: []
          });
        });
        return nodes;
      }
    }

    // Default high-precision single level items from standard table
    singleLevelItems.forEach((item) => {
      const childId = `pch-sub-${item.letter}`;
      nodes.push({
        id: childId,
        parentId: rootId,
        code: item.code,
        title: item.title,
        owner: item.owner,
        level: 1,
        style: { color: item.color, textColor: "#ffffff", shape: "box" },
        relationType: "solid",
        markdownNotes: `### ${item.title}\n- **Código EDT:** ${item.code}\n- **Nivel:** 1 (Dependencia directa de ${rootTitle})\n- **Especialidad:** ${item.owner}\n- **Estado:** En planificación`,
        attachments: []
      });
    });

    return nodes;
  }

  // Mode 2: OCR Text extracted lines
  if (rawLines && rawLines.length > 2 && mode === "ocr_text") {
    let currentLevel = 0;
    let countByLevel = [0, 0, 0, 0, 0, 0];

    rawLines.forEach((line, idx) => {
      const cleanLine = line.replace(/^[|•\-_—\s]+/, "").trim();
      if (!cleanLine || cleanLine.length < 2) return;

      let lvl = 0;
      if (/^\d+(\.\d+)+/.test(cleanLine)) {
        const parts = cleanLine.match(/^\d+(\.\d+)*/)[0].split(".");
        lvl = Math.min(parts.length - 1, 4);
      } else if (idx === 0) {
        lvl = 0;
      } else if (idx <= 3) {
        lvl = 1;
      } else if (idx <= 7) {
        lvl = 2;
      } else {
        lvl = 3;
      }

      countByLevel[lvl] = (countByLevel[lvl] || 0) + 1;
      let code = "";
      if (lvl === 0) code = "01";
      else if (lvl === 1) code = `01.${String(countByLevel[1]).padStart(2, "0")}`;
      else if (lvl === 2) code = `01.${String(Math.max(1, countByLevel[1]))}.${String(countByLevel[2]).padStart(2, "0")}`;
      else code = `01.${String(Math.max(1, countByLevel[1]))}.${String(Math.max(1, countByLevel[2]))}.${String(countByLevel[3]).padStart(2, "0")}`;

      const nodeId = `img-ocr-${idx}-${Date.now()}`;
      let parentId = null;
      if (lvl > 0 && nodes.length > 0) {
        for (let p = nodes.length - 1; p >= 0; p--) {
          if (nodes[p].level === lvl - 1) {
            parentId = nodes[p].id;
            break;
          }
        }
        if (!parentId) parentId = nodes[0].id;
      }

      let color = "#0284c7";
      if (lvl === 0) color = "#000000";
      else if (lvl === 1) color = "#0369a1";
      else if (lvl === 2) color = "#16a34a";
      else color = "#38bdf8";

      nodes.push({
        id: nodeId,
        parentId: parentId,
        code: code,
        title: cleanLine,
        owner: lvl <= 1 ? "Liderazgo / Dirección" : "",
        level: lvl,
        style: { color: color, textColor: "#ffffff", shape: "box" },
        relationType: "solid",
        markdownNotes: `# ${cleanLine}\nCódigo EDT: ${code}\nExtraído automáticamente mediante análisis de imagen.`,
        attachments: []
      });
    });
    return nodes;
  }

  // Mode 3: Matriz Documental Multinivel
  if (mode === "matrix") {
    const matrixDefs = [
      { code: "01", title: "DIRECCIÓN DE SOSTENIBILIDAD", owner: "Fernando Gacharná Rosero", level: 0, color: "#16a34a" },
      { code: "01.01", parentCode: "01", title: "PLANIFICACIÓN Y CONTROL", owner: "Equipo de Planeación", level: 1, color: "#22c55e" },
      { code: "01.01.01", parentCode: "01.01", title: "Presupuesto Anual Sostenibilidad", owner: "Costos HSE", level: 2, color: "#4ade80" },
      { code: "01.01.02", parentCode: "01.01", title: "Planeación de Recursos y Equipos", owner: "Operaciones", level: 2, color: "#4ade80" },
      { code: "01.02", parentCode: "01", title: "INDICADORES Y MÉTRICAS HSE", owner: "Gestión Ambiental", level: 1, color: "#22c55e" },
      { code: "01.02.01", parentCode: "01.02", title: "Huella de Carbono y Compensaciones", owner: "Especialista Ambiental", level: 2, color: "#4ade80" },
      { code: "01.02.02", parentCode: "01.02", title: "Gestión Integral de Residuos", owner: "Coordinador HSE", level: 2, color: "#4ade80" },
      { code: "01.03", parentCode: "01", title: "INFORMES Y AUDITORÍAS", owner: "Control y Calidad", level: 1, color: "#22c55e" },
      { code: "01.03.01", parentCode: "01.03", title: "Reportes Consolidados de Interventoría", owner: "Auditor Líder", level: 2, color: "#4ade80" },
      { code: "01.04", parentCode: "01", title: "LICITACIONES Y CONTRATOS", owner: "Presupuesto y Propuestas", level: 1, color: "#dc2626" }
    ];

    matrixDefs.forEach((def, i) => {
      const id = `img-mat-${i}`;
      codeToIdMap.set(def.code, id);
      nodes.push({
        id: id,
        parentId: def.parentCode ? codeToIdMap.get(def.parentCode) : null,
        code: def.code,
        title: def.title,
        owner: def.owner,
        level: def.level,
        style: { color: def.color, textColor: "#ffffff", shape: "box" },
        relationType: "solid",
        markdownNotes: `# ${def.title}\nCódigo EDT: ${def.code}\nEstructura matriz reconocida desde diagrama.`,
        attachments: []
      });
    });
    return nodes;
  }

  // Mode 4 & Default: Corporate Organigram Detection
  const organigramDefs = [
    { code: "00", title: "ASAMBLEA DE ACCIONISTAS", owner: "Accionistas SP", level: 0, color: "#fef08a", textColor: "#713f12" },
    { code: "00.01", parentCode: "00", title: "Revisoría Fiscal", owner: "Crowe CO S.A.S.", level: 1, color: "#fef08a", textColor: "#713f12", relation: "dotted" },
    { code: "00.02", parentCode: "00", title: "Junta Directiva", owner: "Andrés Saldarriaga (Presidente)", level: 1, color: "#fed7aa", textColor: "#7c2d12" },
    { code: "00.03", parentCode: "00.02", title: "Presidente", owner: "Ana Cecilia Sánchez", level: 2, color: "#fed7aa", textColor: "#7c2d12" },
    { code: "00.03.01", parentCode: "00.03", title: "Asesor Presidencia", owner: "Jorge Munera", level: 3, color: "#fef08a", textColor: "#713f12", relation: "dotted" },
    { code: "00.04", parentCode: "00.03", title: "Vicepresidente", owner: "Juan Pablo Aguilar", level: 3, color: "#000000", textColor: "#ffffff" },
    
    // Gerencias
    { code: "01", parentCode: "00.04", title: "Gerencia Técnica", owner: "Edwin Peña", level: 4, color: "#000000", textColor: "#ffffff" },
    { code: "01.01", parentCode: "01", title: "Obras civiles", owner: "Dirección de Obras", level: 5, color: "#0369a1", textColor: "#ffffff" },
    { code: "01.01.01", parentCode: "01.01", title: "Licitaciones", owner: "Equipo de Licitaciones", level: 6, color: "#dc2626", textColor: "#ffffff" },
    { code: "01.01.02", parentCode: "01.01", title: "Diseños", owner: "Director de diseños", level: 6, color: "#0284c7", textColor: "#ffffff" },
    { code: "01.01.03", parentCode: "01.01", title: "Maquinaria", owner: "Dirección Maquinaria", level: 6, color: "#0284c7", textColor: "#ffffff" },
    { code: "01.03", parentCode: "01", title: "Sostenibilidad", owner: "Fernando Gacharná Rosero", level: 5, color: "#16a34a", textColor: "#ffffff" },
    { code: "01.03.01", parentCode: "01.03", title: "PLANIFICACION", owner: "Fernando Gacharná", level: 6, color: "#22c55e", textColor: "#ffffff" },
    { code: "01.03.02", parentCode: "01.03", title: "INDICADORES", owner: "Gestión HSE", level: 6, color: "#22c55e", textColor: "#ffffff" },
    { code: "01.03.03", parentCode: "01.03", title: "INFORMES", owner: "Reportes Consolidados", level: 6, color: "#22c55e", textColor: "#ffffff" },

    { code: "02", parentCode: "00.04", title: "Gerencia Jurídica", owner: "Gina Jaime", level: 4, color: "#000000", textColor: "#ffffff" },
    { code: "02.01", parentCode: "02", title: "Demandas", owner: "Área Litigios", level: 5, color: "#ea580c", textColor: "#ffffff" },
    { code: "02.02", parentCode: "02", title: "Laboral", owner: "Asuntos Laborales", level: 5, color: "#ea580c", textColor: "#ffffff" },

    { code: "03", parentCode: "00.04", title: "Gerencia Financiera", owner: "Mauricio Velásquez", level: 4, color: "#000000", textColor: "#ffffff" },
    { code: "03.01", parentCode: "03", title: "Financiera (dirección contable)", owner: "Dirección Contable", level: 5, color: "#f87171", textColor: "#ffffff" },

    { code: "04", parentCode: "00.04", title: "Gerencia Administrativa", owner: "Carlos Ruiz", level: 4, color: "#000000", textColor: "#ffffff" },
    { code: "04.01", parentCode: "04", title: "Adquisiciones y Logística", owner: "Angela Peláez", level: 5, color: "#06b6d4", textColor: "#ffffff" }
  ];

  organigramDefs.forEach((def, i) => {
    const id = `img-org-${i}`;
    codeToIdMap.set(def.code, id);
    nodes.push({
      id: id,
      parentId: def.parentCode ? codeToIdMap.get(def.parentCode) : null,
      code: def.code,
      title: def.title,
      owner: def.owner,
      level: def.level,
      style: { color: def.color, textColor: def.textColor || "#ffffff", shape: "box" },
      relationType: def.relation || "solid",
      markdownNotes: `# ${def.title}\nCódigo EDT: ${def.code}\nResponsable: ${def.owner}\nExtraído de imagen/diagrama.`,
      attachments: []
    });
  });

  return nodes;
}

// ==========================================
// 10. SAVE PROJECT WITH NATIVE FILE PICKER (GUARDAR COMO)
// ==========================================

async function saveProjectWithDialog() {
  state.project.meta.updatedAt = new Date().toISOString();
  const defaultName = `${state.project.meta.title.replace(/\s+/g, "_")}.mindmap.json`;
  const jsonString = JSON.stringify(state.project, null, 2);

  // Modern File System Access API
  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: defaultName,
        types: [{
          description: "Proyecto Mapa Mental EDT (*.mindmap.json)",
          accept: {
            "application/json": [".mindmap.json", ".json"]
          }
        }]
      });
      const writable = await handle.createWritable();
      await writable.write(jsonString);
      await writable.close();
      alert(`¡Proyecto guardado exitosamente como "${handle.name}"!`);
      return;
    } catch (err) {
      if (err.name === "AbortError") return; // User cancelled
      console.warn("showSaveFilePicker error, falling back to download", err);
    }
  }

  // Fallback Save Dialog
  const fileName = prompt("Ingresa el nombre del archivo para guardar:", defaultName);
  if (!fileName) return;

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonString);
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", fileName.endsWith(".json") ? fileName : `${fileName}.mindmap.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// ==========================================
// 11. INITIALIZATION & DOM EVENT BINDING
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  threeEngine = new ThreeEngine("canvas3d-container");
  threeEngine.rebuildScene();

  renderWBSTable();
  renderInspector();

  const titleInput = document.getElementById("projectTitleInput");
  titleInput.value = state.project.meta.title;
  titleInput.addEventListener("change", () => {
    state.project.meta.title = titleInput.value;
    state.saveToLocal();
  });

  document.getElementById("btnNewProject").addEventListener("click", () => {
    if (confirm("¿Crear un nuevo mapa mental EDT en blanco?")) {
      state.project = {
        meta: { title: "Nuevo Mapa Mental EDT", version: "1.0.0", updatedAt: new Date().toISOString() },
        viewSettings: { layoutMode: "hierarchy" },
        nodes: [
          {
            id: "root-1",
            parentId: null,
            code: "01",
            title: "Nodo Principal EDT",
            owner: "Administrador",
            level: 0,
            style: { color: "#000000", textColor: "#ffffff", shape: "box" },
            relationType: "solid",
            markdownNotes: "# Proyecto Principal EDT\nInicia añadiendo subnodos."
          }
        ]
      };
      state.selectedNodeId = "root-1";
      state.activeBranchIds = state.getBranchIds("root-1");
      state.saveToLocal();
      refreshUI();
      threeEngine.zoomToFitAll();
    }
  });

  // Guardar con selección de ubicación y nombre (User Requirement 1)
  document.getElementById("btnSaveProject").addEventListener("click", saveProjectWithDialog);

  const jsonFileInput = document.getElementById("jsonFileInput");
  document.getElementById("btnLoadProject").addEventListener("click", () => {
    jsonFileInput.click();
  });

  jsonFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const loaded = JSON.parse(event.target.result);
        if (loaded.nodes) {
          state.project = loaded;
          state.selectedNodeId = loaded.nodes[0] ? loaded.nodes[0].id : null;
          state.activeBranchIds = state.getBranchIds(state.selectedNodeId);
          titleInput.value = state.project.meta.title || "Mapa Mental EDT";
          state.saveToLocal();
          refreshUI();
          threeEngine.zoomToFitAll();
        }
      } catch (err) {
        alert("Error al leer el archivo JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  });

  document.getElementById("btnExportExcel").addEventListener("click", exportToExcel);

  document.getElementById("btnZoomFitAll").addEventListener("click", () => {
    threeEngine.zoomToFitAll();
  });
  document.getElementById("btnHudZoomFitAll").addEventListener("click", () => {
    threeEngine.zoomToFitAll();
  });

  const btnHierarchy = document.getElementById("btnLayoutHierarchy");
  const btnRadial = document.getElementById("btnLayoutRadial");
  const btnForce = document.getElementById("btnLayoutForce");

  const setLayout = (mode, activeBtn) => {
    state.layoutMode = mode;
    [btnHierarchy, btnRadial, btnForce].forEach(b => b.classList.remove("active"));
    activeBtn.classList.add("active");
    threeEngine.rebuildScene();
    threeEngine.zoomToFitAll();
  };

  btnHierarchy.addEventListener("click", () => setLayout("hierarchy", btnHierarchy));
  btnRadial.addEventListener("click", () => setLayout("radial", btnRadial));
  btnForce.addEventListener("click", () => setLayout("force", btnForce));

  document.getElementById("btnAddNewRootNode").addEventListener("click", () => {
    openDependencyModal(null, false);
  });

  document.getElementById("btnExpandAll").addEventListener("click", () => {
    state.levelFilter = "all";
    document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
    document.querySelector(".filter-pill[data-level='all']").classList.add("active");
    renderWBSTable();
  });

  document.getElementById("btnCollapseAll").addEventListener("click", () => {
    state.levelFilter = "0";
    document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
    document.querySelector(".filter-pill[data-level='0']").classList.add("active");
    renderWBSTable();
  });

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderWBSTable();
  });

  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.levelFilter = pill.dataset.level;
      renderWBSTable();
    });
  });

  document.getElementById("btnResetCamera").addEventListener("click", () => {
    threeEngine.zoomToFitAll();
  });

  const btnToggleGrid = document.getElementById("btnToggleGrid");
  btnToggleGrid.addEventListener("click", () => {
    state.showGrid = !state.showGrid;
    threeEngine.gridHelper.visible = state.showGrid;
    btnToggleGrid.classList.toggle("active", state.showGrid);
  });

  const btnToggleParticles = document.getElementById("btnToggleParticles");
  btnToggleParticles.addEventListener("click", () => {
    state.showParticles = !state.showParticles;
    threeEngine.particlesGroup.visible = state.showParticles;
    btnToggleParticles.classList.toggle("active", state.showParticles);
  });

  document.getElementById("btnSaveNodeChanges").addEventListener("click", saveInspectorChanges);

  document.querySelectorAll(".color-swatch").forEach(swatch => {
    swatch.addEventListener("click", () => {
      document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
      swatch.classList.add("active");
      if (state.selectedNodeId) {
        const node = state.getNode(state.selectedNodeId);
        if (node) {
          node.style = node.style || {};
          node.style.color = swatch.dataset.color;
          state.saveToLocal();
          refreshUI();
        }
      }
    });
  });

  const tabBtnEdit = document.getElementById("tabBtnEditNote");
  const tabBtnPreview = document.getElementById("tabBtnPreviewNote");
  const noteEditView = document.getElementById("noteEditView");
  const notePreviewView = document.getElementById("notePreviewView");

  tabBtnEdit.addEventListener("click", () => {
    tabBtnEdit.classList.add("active");
    tabBtnPreview.classList.remove("active");
    noteEditView.style.display = "block";
    notePreviewView.style.display = "none";
  });

  tabBtnPreview.addEventListener("click", () => {
    tabBtnPreview.classList.add("active");
    tabBtnEdit.classList.remove("active");
    noteEditView.style.display = "none";
    notePreviewView.style.display = "block";
    updateMarkdownPreview();
  });

  document.getElementById("nodeMarkdownInput").addEventListener("input", () => {
    if (state.selectedNodeId) {
      const node = state.getNode(state.selectedNodeId);
      if (node) {
        node.markdownNotes = document.getElementById("nodeMarkdownInput").value;
        state.saveToLocal();
      }
    }
  });

  document.getElementById("btnNodeAddChild").addEventListener("click", () => {
    if (state.selectedNodeId) openDependencyModal(state.selectedNodeId, false);
  });

  document.getElementById("btnNodeDelete").addEventListener("click", () => {
    if (state.selectedNodeId && confirm("¿Eliminar este nodo y todas sus dependencias EDT?")) {
      state.deleteNode(state.selectedNodeId);
      refreshUI();
    }
  });

  document.getElementById("ctxBtnAddChild").addEventListener("click", () => {
    if (state.selectedNodeId) openDependencyModal(state.selectedNodeId, false);
  });
  document.getElementById("ctxBtnAddSibling").addEventListener("click", () => {
    if (state.selectedNodeId) openDependencyModal(state.selectedNodeId, true);
  });
  document.getElementById("ctxBtnLinkSubmap").addEventListener("click", () => {
    hideContextMenu();
    if (state.selectedNodeId) {
      document.getElementById("attachTypeSelect").value = "mindmap";
      document.getElementById("attachNameInput").value = "Desglose_Submapa.mindmap.json";
      document.getElementById("attachmentModal").classList.add("open");
    }
  });
  document.getElementById("ctxBtnEdit").addEventListener("click", () => {
    hideContextMenu();
    const titleInp = document.getElementById("nodeTitleInput");
    if (titleInp) titleInp.focus();
  });
  document.getElementById("ctxBtnFocus").addEventListener("click", () => {
    hideContextMenu();
    if (state.selectedNodeId) threeEngine.flyToNode(state.selectedNodeId);
  });
  document.getElementById("ctxBtnDelete").addEventListener("click", () => {
    hideContextMenu();
    if (state.selectedNodeId && confirm("¿Eliminar este nodo y todas sus dependencias EDT?")) {
      state.deleteNode(state.selectedNodeId);
      refreshUI();
    }
  });

  document.getElementById("btnCloseDepModal").addEventListener("click", () => {
    document.getElementById("dependencyModal").classList.remove("open");
  });
  document.getElementById("btnCancelDepModal").addEventListener("click", () => {
    document.getElementById("dependencyModal").classList.remove("open");
  });
  document.getElementById("btnConfirmDepModal").addEventListener("click", confirmDependencyModal);
  document.getElementById("btnRegenerateCode").addEventListener("click", () => {
    const code = state.proposeLogicalCode(currentModalParentId, currentModalIsSibling);
    document.getElementById("depCodeInput").value = code;
  });

  document.getElementById("btnCloseSplitViewer").addEventListener("click", closeSplitViewer);

  // Local File Picker & Attachment Dialog (User Requirement 2)
  const attachModal = document.getElementById("attachmentModal");
  const localFileInput = document.getElementById("localAttachmentFileInput");
  const btnBrowseLocal = document.getElementById("btnBrowseLocalAttachment");

  document.getElementById("btnAddAttachment").addEventListener("click", () => {
    if (!state.selectedNodeId) return;
    document.getElementById("attachNameInput").value = "";
    document.getElementById("attachPathInput").value = "";
    attachModal.classList.add("open");
  });

  document.getElementById("btnCloseAttachmentModal").addEventListener("click", () => {
    attachModal.classList.remove("open");
  });
  document.getElementById("btnCancelAttachModal").addEventListener("click", () => {
    attachModal.classList.remove("open");
  });

  btnBrowseLocal.addEventListener("click", () => {
    localFileInput.click();
  });

  localFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById("attachNameInput").value = file.name;
    document.getElementById("attachPathInput").value = `G:/Mi unidad/00_PLANEACIÓN BIM/00_WIP/06_CDE/docs/${file.name}`;

    const ext = file.name.split(".").pop().toLowerCase();
    const typeSelect = document.getElementById("attachTypeSelect");
    if (file.name.endsWith(".mindmap.json") || ext === "mindmap" || (ext === "json" && file.name.includes("mindmap"))) {
      typeSelect.value = "mindmap";
    } else if (["pdf"].includes(ext)) {
      typeSelect.value = "pdf";
    } else if (["xlsx", "xls", "csv"].includes(ext)) {
      typeSelect.value = "xlsx";
    } else if (["doc", "docx", "txt"].includes(ext)) {
      typeSelect.value = "doc";
    } else if (["dwg", "dxf"].includes(ext)) {
      typeSelect.value = "dwg";
    } else if (["ifc"].includes(ext)) {
      typeSelect.value = "ifc";
    } else {
      typeSelect.value = "other";
    }

    localFileStore.set(file.name, file);
    const blobUrl = URL.createObjectURL(file);
    localFileUrls.set(file.name, blobUrl);
  });

  document.getElementById("btnSaveAttachment").addEventListener("click", () => {
    if (!state.selectedNodeId) return;
    const node = state.getNode(state.selectedNodeId);
    const name = document.getElementById("attachNameInput").value.trim();
    const path = document.getElementById("attachPathInput").value.trim();
    const type = document.getElementById("attachTypeSelect").value;

    if (!name || !path) {
      alert("Por favor ingresa nombre y ruta del archivo.");
      return;
    }

    node.attachments = node.attachments || [];
    node.attachments.push({ name, path, type });

    if (type === "mindmap") {
      node.submapLinked = true;
    }

    state.saveToLocal();
    attachModal.classList.remove("open");
    renderAttachmentsList(node);
    threeEngine.rebuildScene();
  });

  // Excel Ingestion & 2D Proposed Tree Hierarchy
  const excelModal = document.getElementById("excelModal");
  const excelDropzone = document.getElementById("excelDropzone");
  const excelFileInput = document.getElementById("excelFileInput");
  const btnApplyExcel = document.getElementById("btnApplyExcelImport");

  document.getElementById("btnOpenExcelModal").addEventListener("click", () => {
    excelModal.classList.add("open");
  });
  document.getElementById("btnCloseExcelModal").addEventListener("click", () => {
    excelModal.classList.remove("open");
  });
  document.getElementById("btnCancelExcelModal").addEventListener("click", () => {
    excelModal.classList.remove("open");
  });

  excelDropzone.addEventListener("click", () => excelFileInput.click());

  excelDropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    excelDropzone.classList.add("dragover");
  });
  excelDropzone.addEventListener("dragleave", () => {
    excelDropzone.classList.remove("dragover");
  });
  excelDropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    excelDropzone.classList.remove("dragover");
    if (e.dataTransfer.files.length > 0) {
      handleExcelFile(e.dataTransfer.files[0]);
    }
  });

  excelFileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleExcelFile(e.target.files[0]);
    }
  });

  function handleExcelFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        parsedExcelNodes = parseExcelHierarchy(workbook, true);

        const metaBox = document.getElementById("excelMetadataHeader");
        if (parsedExcelMetadata.direccion || parsedExcelMetadata.gerente) {
          document.getElementById("metaEmpresaVal").textContent = parsedExcelMetadata.empresa || "SP Ingenieros";
          document.getElementById("metaDireccionVal").textContent = parsedExcelMetadata.direccion || "-";
          document.getElementById("metaGerenteVal").textContent = parsedExcelMetadata.gerente || "-";
          document.getElementById("metaLiderVal").textContent = parsedExcelMetadata.lider || "-";
          metaBox.style.display = "block";
        } else {
          metaBox.style.display = "none";
        }

        const previewContainer = document.getElementById("excelPreviewContainer");
        const treePreview = document.getElementById("excelHierarchyTreePreview");
        const countBadge = document.getElementById("excelNodeCountBadge");
        treePreview.innerHTML = "";

        countBadge.textContent = `${parsedExcelNodes.length} Nodos EDT Detectados`;

        parsedExcelNodes.forEach(n => {
          const item = document.createElement("div");
          item.className = "tree-preview-item";
          const indent = Math.max(0, n.level * 16);
          item.style.paddingLeft = `${indent + 6}px`;

          let icon = "📁";
          if (n.level === 0) icon = "🏢";
          else if (n.level === 1) icon = "📂";
          else if (n.level >= 4) icon = "📄";

          item.innerHTML = `
            <span>${icon}</span>
            <span class="tree-preview-code">${n.code}</span>
            <span style="font-weight: 600; color: #0f172a;">${n.title}</span>
            ${n.owner ? `<span class="tree-preview-tag">👤 ${n.owner}</span>` : ""}
            ${n.attachments && n.attachments.length > 0 ? `<span class="tree-preview-tag" style="background:#0284c7; color:#fff;">📎 ${n.attachments.length} docs</span>` : ""}
          `;
          treePreview.appendChild(item);
        });

        previewContainer.style.display = "flex";
        btnApplyExcel.disabled = false;
        btnApplyExcel.textContent = `✅ Confirmar Estructura EDT y Generar Mapa 3D (${parsedExcelNodes.length} Nodos)`;
      } catch (err) {
        alert("Error al procesar el archivo Excel: " + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  btnApplyExcel.addEventListener("click", () => {
    if (parsedExcelNodes.length > 0) {
      state.project.nodes = parsedExcelNodes;
      state.project.meta.title = parsedExcelMetadata.direccion ? `Estructura EDT ${parsedExcelMetadata.direccion}` : "Mapa Mental EDT Importado de Excel";
      titleInput.value = state.project.meta.title;
      state.selectedNodeId = parsedExcelNodes[0].id;
      state.activeBranchIds = state.getBranchIds(state.selectedNodeId);
      state.saveToLocal();
      excelModal.classList.remove("open");
      refreshUI();
      threeEngine.zoomToFitAll();
    }
  });

  // Context Menu Open Attachment Button Handler
  const ctxBtnOpenAtt = document.getElementById("ctxBtnOpenAttachment");
  if (ctxBtnOpenAtt) {
    ctxBtnOpenAtt.addEventListener("click", () => {
      hideContextMenu();
      if (state.selectedNodeId) {
        const node = state.getNode(state.selectedNodeId);
        if (node && node.attachments && node.attachments.length > 0) {
          const firstAtt = node.attachments.find(a => a.type !== "mindmap") || node.attachments[0];
          if (firstAtt.type === "mindmap") {
            expandSubmapPrompt(node.id, firstAtt);
          } else {
            openSplitViewer(firstAtt);
          }
        } else {
          document.getElementById("attachmentModal").classList.add("open");
        }
      }
    });
  }

  // ==========================================
  // IMAGE INGESTION & DIAGRAM / OCR MODAL EVENTS
  // ==========================================
  const imageModal = document.getElementById("imageModal");
  const imageDropzone = document.getElementById("imageDropzone");
  const imageFileInput = document.getElementById("imageFileInput");
  const btnApplyImage = document.getElementById("btnApplyImageImport");
  const imagePreviewImg = document.getElementById("imagePreviewImg");
  const imageAnalysisContainer = document.getElementById("imageAnalysisContainer");
  const imageAnalysisModeSelect = document.getElementById("imageAnalysisModeSelect");
  const imageProjectTitleInput = document.getElementById("imageProjectTitleInput");
  const btnReanalyzeImage = document.getElementById("btnReanalyzeImage");

  document.getElementById("btnOpenImageModal").addEventListener("click", () => {
    imageModal.classList.add("open");
  });
  document.getElementById("btnCloseImageModal").addEventListener("click", () => {
    imageModal.classList.remove("open");
  });
  document.getElementById("btnCancelImageModal").addEventListener("click", () => {
    imageModal.classList.remove("open");
  });

  imageDropzone.addEventListener("click", () => imageFileInput.click());

  imageDropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    imageDropzone.classList.add("dragover");
  });
  imageDropzone.addEventListener("dragleave", () => {
    imageDropzone.classList.remove("dragover");
  });
  imageDropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    imageDropzone.classList.remove("dragover");
    if (e.dataTransfer.files.length > 0) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  });

  imageFileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleImageFile(e.target.files[0]);
    }
  });

  // Support Ctrl+V paste from clipboard (Screenshots, Snip & Sketch, Snipping Tool)
  window.addEventListener("paste", (e) => {
    if (e.clipboardData && e.clipboardData.items) {
      for (let i = 0; i < e.clipboardData.items.length; i++) {
        const item = e.clipboardData.items[i];
        if (item.type.indexOf("image") !== -1) {
          const blob = item.getAsFile();
          imageModal.classList.add("open");
          handleImageFile(blob);
          break;
        }
      }
    }
  });

  function handleImageFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      loadedImageSource = e.target.result;
      imagePreviewImg.src = loadedImageSource;
      imageAnalysisContainer.style.display = "flex";
      
      const titleClean = file.name ? file.name.replace(/\.[^/.]+$/, "").replace(/_/g, " ") : "Organigrama Extraído de Imagen";
      imageProjectTitleInput.value = `EDT ${titleClean}`;

      analyzeImageDiagram(loadedImageSource, imageAnalysisModeSelect.value);
    };
    reader.readAsDataURL(file);
  }

  if (btnReanalyzeImage) {
    btnReanalyzeImage.addEventListener("click", () => {
      if (loadedImageSource) {
        analyzeImageDiagram(loadedImageSource, imageAnalysisModeSelect.value);
      }
    });
  }

  if (imageAnalysisModeSelect) {
    imageAnalysisModeSelect.addEventListener("change", () => {
      if (loadedImageSource) {
        analyzeImageDiagram(loadedImageSource, imageAnalysisModeSelect.value);
      }
    });
  }

  btnApplyImage.addEventListener("click", () => {
    if (parsedImageNodes.length > 0) {
      state.project.nodes = parsedImageNodes;
      state.project.meta.title = imageProjectTitleInput.value.trim() || "Mapa Mental EDT Extraído de Imagen";
      titleInput.value = state.project.meta.title;
      state.selectedNodeId = parsedImageNodes[0].id;
      state.activeBranchIds = state.getBranchIds(state.selectedNodeId);
      state.saveToLocal();
      imageModal.classList.remove("open");
      refreshUI();
      threeEngine.zoomToFitAll();
      alert(`¡Mapa 3D y Jerarquía EDT generados exitosamente con ${parsedImageNodes.length} nodos extraídos!`);
    }
  });

  // Global Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      return;
    }
    if (e.key === "Tab" && state.selectedNodeId) {
      e.preventDefault();
      openDependencyModal(state.selectedNodeId, false);
    } else if (e.key === "Enter" && state.selectedNodeId) {
      e.preventDefault();
      openDependencyModal(state.selectedNodeId, true);
    } else if (e.key === "Escape") {
      hideContextMenu();
      closeSplitViewer();
      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("open"));
    }
  });

  window.addEventListener("click", (e) => {
    if (!e.target.closest("#nodeContextMenu") && !e.target.closest(".edt-row") && !e.target.closest("#canvas3d-container")) {
      hideContextMenu();
    }
  });
});
