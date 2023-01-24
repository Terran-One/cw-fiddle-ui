import type { GridSize } from "@mui/system";

type GridSizeName = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridSizeProps = {
  [s in GridSizeName]?: boolean | GridSize;
}
