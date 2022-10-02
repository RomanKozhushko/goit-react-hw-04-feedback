import React from 'react';
import {SectionBox, SectionTitle} from './sectionRender.styled';

export default function Section({ title, children }) {
  return (
    <SectionBox>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionBox>
  );
}
