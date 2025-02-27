import { BuilderComponent } from '@builder.io/react';

export interface PageProps {
  content: BuilderComponent;
  title?: string;
}

export interface SectionProps {
  content: BuilderComponent;
  className?: string;
}

export interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
} 