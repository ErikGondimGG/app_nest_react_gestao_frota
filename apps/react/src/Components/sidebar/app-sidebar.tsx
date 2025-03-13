import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from './search-form';
import { VersionSwitcher } from './version-switcher';

// This is sample data.
const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Veículos',
      url: '#',
      items: [
        {
          title: 'Dashboard',
          url: '/app/veiculos/dashboard',
          isActive: false,
        },
        {
          title: 'Cadastrar',
          url: '/app/veiculos/cadastrar',
          isActive: false,
        },
      ],
    },
    {
      title: 'Ordens de Serviço',
      url: '#',
      items: [
        {
          title: 'Consultar',
          url: '/app/ordens-de-servico/consultar',
          isActive: false,
        },
        {
          title: 'Cadastrar',
          url: '/app/ordens-de-servico/cadastrar',
          isActive: false,
        },
      ],
    },
    {
      title: 'Ordens de Manutenção',
      url: '#',
      items: [
        {
          title: 'Consultar',
          url: '/app/ordens-de-manutencao/consultar',
          isActive: false,
        },
        {
          title: 'Cadastrar',
          url: '/app/ordens-de-manutencao/cadastrar',
          isActive: false,
        },
      ],
    },
    {
      title: 'Agendamentos',
      url: '#',
      items: [
        {
          title: 'Consultar',
          url: '/app/agendamentos/consultar',
          isActive: false,
        },
        {
          title: 'Cadastrar',
          url: '/app/agendamentos/cadastrar',
          isActive: false,
        },
      ],
    },
    {
      title: 'Usuário',
      url: '#',
      items: [
        {
          title: 'Perfil',
          url: '/app/pecas/consultar',
          isActive: false,
        },
        {
          title: 'Contatos',
          url: '/app/pecas/cadastrar',
          isActive: false,
        },
        {
          title: 'Sair',
          url: '/',
          isActive: false,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map(item => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
