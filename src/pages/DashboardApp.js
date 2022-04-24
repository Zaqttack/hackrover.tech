import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import account from '../_mock/account';

const newsTitles = [
  'Updated Resources on Curiosity',
  'New Goal for Prototypes',
  'Resources for New Transmission Builds',
  'Documentation on new IoT Mesh Map',
  'How to Transmit Data Properly',
]

const newsSubheadings = [
  'Documentation',
  'Stretch Goals',
  'Documentation',
  'Documentation',
  'Guide',
]

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back {account.nameFirst}!
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Connected Rovers" total={7} icon={'ant-design:number-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Uptime" total={87} color="success" isPercent="true" icon={'simple-line-icons:graph'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Operators Online" total={3} color="warning" icon={'wpf:online'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Failed Builds" total={58} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Top 3 Rover's Uptime"
              chartLabels={[
                '01/01/2022',
                '02/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
              ]}
              chartData={[
                {
                  name: 'Curiosity',
                  type: 'line',
                  fill: 'solid',
                  data: [90, 45, 75, 80, 93, 78, 93, 85, 82, 88, 89],
                },
                {
                  name: 'Perseverance',
                  type: 'line',
                  fill: 'solid',
                  data: [87, 73, 87, 75, 72, 79, 85, 85, 89, 98, 88],
                },
                {
                  name: 'Opportunity',
                  type: 'line',
                  fill: 'solid',
                  data: [67, 83, 82, 89, 75, 87, 98, 99, 65, 85, 84],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Event Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'New SDK Deployment',
                  'Development of new Mesh Network',
                  'Prototype Testing on Curisoity',
                  'Deployment of Mesh Network',
                  'New Constructors',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Storage Capacity"
              subheader="out of 100%"
              chartData={[
                { label: 'Opportunity', value: 23 },
                { label: 'Spirit', value: 27 },
                { label: 'Zhurong', value: 55 },
                { label: 'Mars 3 PrOP-M', value: 67 },
                { label: 'Curiosity', value: 80 },
                { label: 'Sojourner', value: 82 },
                { label: 'Perseverance', value: 95 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Focus Goals"
              chartLabels={['Efficency', 'Distance', 'Tests', 'Data Samples', 'Uptime', 'Repairs']}
              chartData={[
                { name: 'Curiosity', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Perseverance', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Opportunity', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Quick Contact"
              list={[
                {
                  name: 'Administrator',
                  value: 323234,
                  icon: <Iconify icon={'dashicons:admin-network'} color="#1877F2" width={32} height={32} />,
                },
                {
                  name: 'Help Desk',
                  value: 341212,
                  icon: <Iconify icon={'clarity:help-info-solid'} color="#DF3E30" width={32} height={32} />,
                },
                {
                  name: 'Documentation',
                  value: 411213,
                  icon: <Iconify icon={'bxs:book-bookmark'} color="#006097" width={32} height={32} />,
                },
                {
                  name: 'Terminal',
                  value: 443232,
                  icon: <Iconify icon={'bi:terminal-fill'} color="#1C9CEA" width={32} height={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: newsTitles[index],
                description: newsSubheadings[index],
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
