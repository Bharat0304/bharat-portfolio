import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';

export default function Blog() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />
      <div className="mt-8 flex justify-center text-muted-foreground">Coming Soon</div>
    </Container>
  );
}
