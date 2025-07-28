import Menuitems from '@/configurations/sidebar-navigation';

// Delay helper
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  // Delay for 2 seconds (2000ms)
  await delay(2000);

  return Response.json(
    {
      data: Menuitems
    },
    {
      status: 200
    }
  );
}
