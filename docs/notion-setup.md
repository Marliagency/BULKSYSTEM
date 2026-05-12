# Cómo configurar el dashboard en Notion

## Estructura del workspace
```
BULK SYSTEM/
├── 🏠 Dashboard Principal
├── 📅 Check Diario (base de datos)
├── ⚖️ Registro de Peso (base de datos)
├── 🍽️ Plan de Comidas (base de datos)
├── 🏋️ Rutinas (base de datos)
├── 📈 Progreso y Métricas
└── ⚙️ Configuración Personal
```

## Bases de datos necesarias

### 1. Check Diario
Propiedades:
- Fecha (Date)
- Desayuno ✓ (Checkbox)
- Entrenamiento ✓ (Checkbox)
- Comida ✓ (Checkbox)
- Cena ✓ (Checkbox)
- Notas (Text)
- Semana (Formula: `weekNumber(prop("Fecha"))`)
- % Completado (Formula: cuenta checkboxes activos / total * 100)

### 2. Registro de Peso
Propiedades:
- Fecha (Date)
- Peso (Number, kg)
- Diferencia con semana anterior (Formula)
- Semana (Formula)
- Notas (Text)

### 3. Plan de Comidas
Propiedades:
- Nombre (Title)
- Momento (Select: Desayuno / Comida / Cena / Snack / Post-entreno)
- Día (Select: Lunes ... Domingo)
- Semana (Number)
- Ingredientes (Text)
- Porciones (Text)
- Completado (Checkbox)

### 4. Rutinas
Propiedades:
- Sesión (Title)
- Tipo (Select: Upper A / Upper B / Lower A / Lower B)
- Día (Select)
- Semana (Number)
- Ejercicios (Text o Relation)

## Vistas recomendadas

### Dashboard Principal
- Gallery view de Check Diario filtrada por fecha = hoy
- Linked database de Registro de Peso ordenada por fecha
- Progreso visual (barra con fórmula)

### Vista semanal
- Calendar view de Check Diario
- Filter: Semana = semana actual

## Cómo duplicar para un nuevo cliente
1. Abre la plantilla maestra en Notion
2. Click en `···` → `Duplicate`
3. Cambia el nombre a "Bulk System — [Nombre cliente]"
4. Comparte con el cliente: `Share` → `Invite` → introduce su email
5. Rellena los datos iniciales:
   - Peso inicial
   - Peso objetivo
   - Semana de inicio
   - Nombre del cliente

## Tiempo estimado de setup
- Duplicar plantilla: 2 minutos
- Personalizar datos: 5 minutos
- Explicar al cliente cómo usarlo: 5 minutos

Total: ~12 minutos por cliente
