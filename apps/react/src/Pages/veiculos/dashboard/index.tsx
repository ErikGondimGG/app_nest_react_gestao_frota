import withAuth from '@/components/auth/withAuth';
import { useSidebarStore } from '@/stores/sidebar.store';
import React from 'react';
import DashboardGrid from './components/cardsGrid';

const dashboardIndex: React.FC = () => {
  const { open } = useSidebarStore();

  return (
    <>
      <div className="flex  flex-1 flex-col gap-4 p-4">
        <DashboardGrid open={open} />
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
};

export default withAuth(dashboardIndex); // Wrap dashboardIndex;
