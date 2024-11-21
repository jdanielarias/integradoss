// src/app/layout.tsx
import { Suspense } from 'react';
import MainLayout from '@/components/layout/Layout';
import './globals.css';

export const metadata = {
  title: 'INTEGRADOSS - Sistemas Integrados de Gestión',
  description: 'Grupo de Investigación en Sistemas Integrados de Gestión',
  keywords: ['investigación', 'sistemas integrados', 'gestión', 'INTEGRADOSS'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Suspense fallback={<Loading />}>
          <MainLayout>
            {children}
          </MainLayout>
        </Suspense>
      </body>
    </html>
  );
}

// Componente de carga simple mientras se monta el MainLayout
const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="text-white text-4xl font-bold">INTEGRADOSS</div>
  </div>
);