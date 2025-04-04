'use client';

export function PlanDesarrolloPage() {
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] p-4">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Plan de Desarrollo</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Visión</h2>
              <p className="text-gray-300">
                Para el año 2024, Tunja será reconocida como una ciudad moderna, sostenible e inclusiva, 
                con una infraestructura urbana de calidad que mejora la calidad de vida de sus habitantes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Objetivos Estratégicos</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Mejorar la infraestructura vial y el espacio público</li>
                <li>Promover el desarrollo sostenible y el cuidado del medio ambiente</li>
                <li>Fortalecer la participación ciudadana en la gestión pública</li>
                <li>Impulsar el desarrollo económico y la competitividad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Líneas de Acción</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">1. Infraestructura y Movilidad</h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Pavimentación y mantenimiento de vías</li>
                    <li>Mejoramiento del espacio público</li>
                    <li>Optimización del sistema de transporte</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">2. Sostenibilidad Ambiental</h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Protección de áreas verdes</li>
                    <li>Gestión eficiente de residuos</li>
                    <li>Promoción de energías renovables</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">3. Participación Ciudadana</h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Fortalecimiento de juntas de acción comunal</li>
                    <li>Presupuesto participativo</li>
                    <li>Veedurías ciudadanas</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Seguimiento y Evaluación</h2>
              <p className="text-gray-300">
                El plan cuenta con indicadores de gestión y resultado que permiten medir el avance 
                y cumplimiento de los objetivos propuestos. Se realizarán evaluaciones periódicas 
                y rendiciones de cuentas a la ciudadanía.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
