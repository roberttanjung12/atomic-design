import { Box, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type drontPackageJson from '../../../../node_modules/@dront/ui/package.json';
import type packageJson from '../../../../package.json';
import TextHighlighter from '../TextHighlighter';

/**
 * Represents a package dependency with its details.
 */
type DrontPeerDependencyName = keyof typeof drontPackageJson.peerDependencies;

type DependencyName = keyof typeof packageJson.dependencies;

/**
 * Represents dependency details.
 */
interface PackageDetail {
  version: string | string[];
  description?: React.ReactNode;
}

/**
 * Props for the Dependencies component.
 */
export interface DependenciesProps {
  /**
   * List of package dependencies to display
   */
  packages: Partial<Record<DrontPeerDependencyName | DependencyName, PackageDetail>>;
}

/**
 * Generates npm package URL for the given package name
 */
const getPackageUrl = (packageName: string): string => {
  return `https://www.npmjs.com/package/${packageName}`;
};

/**
 * Component that displays a list of package dependencies used by a component.
 * Shows package names, versions, and optional descriptions.
 *
 * @param props - The Dependencies component props
 * @param props.packages - List of package dependencies to display
 *
 * @returns A React component that renders the dependencies list
 */
const Dependencies = ({ packages }: DependenciesProps) => {
  return (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        This component depends on the following packages:
      </Typography>

      <TableContainer sx={{ mt: 2 }} component={props => <Card {...props} variant="outlined" sx={{ padding: 0 }} />}>
        <Table>
          <TableHead
            sx={{
              '& th': {
                fontWeight: 'bold'
              }
            }}
          >
            <TableRow>
              <TableCell align="center" sx={{ width: 150 }}>
                Package Name
              </TableCell>
              <TableCell align="center" sx={{ width: 150 }}>
                Version
              </TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Object.entries(packages).map(([pkgName, detail]) => {
              return (
                <TableRow key={pkgName}>
                  <TableCell align="center" sx={{ alignContent: 'start' }}>
                    <Link href={getPackageUrl(pkgName)} target="_blank" rel="noopener noreferrer" underline="none">
                      <Chip label={pkgName} size="small" variant="outlined" color="primary" />
                    </Link>
                  </TableCell>

                  <TableCell align="center" sx={{ alignContent: 'start' }}>
                    {Array.isArray(detail.version) ? (
                      <Stack spacing={1}>
                        {detail.version.map(version => {
                          return (
                            <Box key={`${pkgName}-${version}`}>
                              <Chip label={version} size="small" variant="filled" color="default" />
                            </Box>
                          );
                        })}
                      </Stack>
                    ) : (
                      <Chip label={detail.version} size="small" variant="filled" color="default" />
                    )}
                  </TableCell>

                  <TableCell>
                    {typeof detail.description === 'string' ? (
                      <TextHighlighter
                        sx={({ typography }) => ({
                          fontSize: typography.body2.fontSize,
                          lineHeight: typography.body2.lineHeight
                        })}
                        text={detail.description}
                      />
                    ) : (
                      detail.description
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Dependencies;
