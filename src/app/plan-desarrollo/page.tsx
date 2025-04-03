'use client';

export default function PlanDesarrollo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Plan de Desarrollo 2024-2027</h1>
      
      <div className="grid gap-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Visión</h2>
          <p className="text-gray-700 mb-4">
            Tunja se proyecta como una ciudad moderna, sostenible e inclusiva, 
            que preserva su patrimonio histórico mientras impulsa el desarrollo 
            tecnológico y la innovación.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Ejes Estratégicos</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-primary-600">1. Infraestructura y Movilidad</h3>
              <p className="text-gray-700">
                Desarrollo de obras públicas estratégicas para mejorar la calidad de vida 
                de los ciudadanos y la movilidad urbana.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-primary-600">2. Sostenibilidad Ambiental</h3>
              <p className="text-gray-700">
                Implementación de políticas y proyectos para la protección del medio ambiente 
                y la adaptación al cambio climático.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-primary-600">3. Desarrollo Social</h3>
              <p className="text-gray-700">
                Fortalecimiento de programas sociales, educativos y culturales para 
                el bienestar de la comunidad.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Metas Principales</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Modernización de la infraestructura vial</li>
            <li>Implementación de sistemas de transporte sostenible</li>
            <li>Recuperación de espacios públicos</li>
            <li>Fortalecimiento de la seguridad ciudadana</li>
            <li>Desarrollo de programas de inclusión social</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
