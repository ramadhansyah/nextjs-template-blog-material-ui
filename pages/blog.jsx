import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Blog() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Button size="small">Subscribe</Button>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Nextjs Material-UI</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
          </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nextjs Material-ui
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://scontent.fkno6-1.fna.fbcdn.net/v/t1.0-9/11892138_898342333545504_8243710640247446688_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGB_-vVAj5KpQWbl3hbIiPFvf1q3zwA2ly9_WrfPADaXCNIZL2emYxAKE7s5NfsUkP3qoSA_YKVZTJwq_JmizOB&_nc_ohc=BQDKfY5Ql38AX_Z6iDS&_nc_ht=scontent.fkno6-1.fna&oh=c5925725c925be0d509f3da0770b69a1&oe=5FCFD2E7" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Adan
                      </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Nov 11, 2020
                      </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nextjs Material-ui
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://scontent.fkno6-1.fna.fbcdn.net/v/t1.0-9/11892138_898342333545504_8243710640247446688_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGB_-vVAj5KpQWbl3hbIiPFvf1q3zwA2ly9_WrfPADaXCNIZL2emYxAKE7s5NfsUkP3qoSA_YKVZTJwq_JmizOB&_nc_ohc=BQDKfY5Ql38AX_Z6iDS&_nc_ht=scontent.fkno6-1.fna&oh=c5925725c925be0d509f3da0770b69a1&oe=5FCFD2E7" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Adan
                      </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Nov 11, 2020
                      </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nextjs Material-ui
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://scontent.fkno6-1.fna.fbcdn.net/v/t1.0-9/11892138_898342333545504_8243710640247446688_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGB_-vVAj5KpQWbl3hbIiPFvf1q3zwA2ly9_WrfPADaXCNIZL2emYxAKE7s5NfsUkP3qoSA_YKVZTJwq_JmizOB&_nc_ohc=BQDKfY5Ql38AX_Z6iDS&_nc_ht=scontent.fkno6-1.fna&oh=c5925725c925be0d509f3da0770b69a1&oe=5FCFD2E7" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Adan
                      </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Nov 11, 2020
                      </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nextjs Material-ui
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://scontent.fkno6-1.fna.fbcdn.net/v/t1.0-9/11892138_898342333545504_8243710640247446688_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGB_-vVAj5KpQWbl3hbIiPFvf1q3zwA2ly9_WrfPADaXCNIZL2emYxAKE7s5NfsUkP3qoSA_YKVZTJwq_JmizOB&_nc_ohc=BQDKfY5Ql38AX_Z6iDS&_nc_ht=scontent.fkno6-1.fna&oh=c5925725c925be0d509f3da0770b69a1&oe=5FCFD2E7" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Adan
                      </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Nov 11, 2020
                      </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nextjs Material-ui
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://scontent.fkno6-1.fna.fbcdn.net/v/t1.0-9/11892138_898342333545504_8243710640247446688_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGB_-vVAj5KpQWbl3hbIiPFvf1q3zwA2ly9_WrfPADaXCNIZL2emYxAKE7s5NfsUkP3qoSA_YKVZTJwq_JmizOB&_nc_ohc=BQDKfY5Ql38AX_Z6iDS&_nc_ht=scontent.fkno6-1.fna&oh=c5925725c925be0d509f3da0770b69a1&oe=5FCFD2E7" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Adan
                      </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Nov 11, 2020
                      </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nextjs Material-ui
                    </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://scontent.fkno6-1.fna.fbcdn.net/v/t1.0-9/11892138_898342333545504_8243710640247446688_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGB_-vVAj5KpQWbl3hbIiPFvf1q3zwA2ly9_WrfPADaXCNIZL2emYxAKE7s5NfsUkP3qoSA_YKVZTJwq_JmizOB&_nc_ohc=BQDKfY5Ql38AX_Z6iDS&_nc_ht=scontent.fkno6-1.fna&oh=c5925725c925be0d509f3da0770b69a1&oe=5FCFD2E7" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Adan
                      </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Nov 11, 2020
                      </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </>
  );
}

export default Blog;