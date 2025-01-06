import './ViewportGizmo.scss';

type GizmoProps = {
  rotation: { x: number; y: number; z: number }; // Current viewport rotation in degrees
  onChange: (rotation: { x: number; y: number; z: number }) => void; // Callback for rotation changes
};

const Gizmo = (props: GizmoProps) => {
  console.log(props);
  return <div className="sphere"></div>;
};

export default Gizmo;
