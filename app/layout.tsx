import { ThemeProvider } from '@/components/theme-provider';
import '@/app/globals.css';
import type React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // Просто передаем children без оборачивания в html и body
}
