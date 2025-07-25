import { ImageComponent, SvgImport } from 'apps/web/src/components/Brand/Image';
import SubBrandsStructureSvg from './structure.svg';

const svg = SubBrandsStructureSvg as SvgImport;

const images = [
  {
    src: svg.src,
    alt: 'Sub Brands Structure',
    width: svg.width,
    height: svg.height,
  },
];

export function SubBrandsStructure() {
  return (
    <ImageComponent
      id="sub-brands-structure"
      title="Structure"
      description={
        <>
          <span className="block mb-4">
            Sub‑brands organize our expanding product suite into clear pillars while keeping
            everything unmistakably Base. Each surface — Base App for everyday users, Base Builders
            for developers, Base Pay for commerce, and future services — borrows the Square, Base
            Sans, and color core, then adds a functional descriptor.
          </span>
          <span className="block mb-4">
            Naming pattern: &quot;base&quot; space descriptor. Visual lockup: descriptor in
            lowercase followed by the Square. Maintain palette parity and type pairing;
            differentiation comes from content tone and motion, not from new logos. Retire or merge
            sub-brands that lose strategic value.
          </span>
        </>
      }
      images={images}
    />
  );
}
