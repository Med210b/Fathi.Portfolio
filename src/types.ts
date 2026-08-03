/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Design';
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  technology: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  caseStudy?: {
    challenge: string;
    features: string[];
  };
}

export interface Experience {
  company: string;
  role: string;
  description: string;
  year: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  stars: number;
}
