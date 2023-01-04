import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MapIcon from '@mui/icons-material/Map';
import { lineApi } from 'app/api/line-api';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { format } from 'date-fns';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Stack } from '@mui/system';
import { SlacklineDetailInfoField } from 'app/components/TextFields/SlacklineDetailInfoField';
import { SlacklineDetailRestrictionField } from 'app/components/TextFields/SlacklineDetailRestrictionField';
import { SlacklineDetailSpecsField } from 'app/components/TextFields/SlacklineDetailSpecsField';

interface Props {
  lineId: string;
}

export const LineDetailCard = (props: Props) => {
  const [cardHeaderMenuAnchorEl, setCardHeaderMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const openCardHeaderMenu = Boolean(cardHeaderMenuAnchorEl);

  const { data: lineDetails, isFetching } = lineApi.useGetLineDetailsQuery(
    props.lineId,
  );
  const [expanded, setExpanded] = React.useState(false);

  const onCardHeaderMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setCardHeaderMenuAnchorEl(event.currentTarget);
  };

  const onCardHeaderMenuClose = () => {
    setCardHeaderMenuAnchorEl(null);
  };

  return (
    <Card
      sx={{
        boxShadow: 'none',
        border: 'none',
        height: '100%',
        width: '100%',
        overflow: 'scroll',
      }}
    >
      {isFetching || !lineDetails ? (
        <LoadingIndicator />
      ) : (
        <>
          <CardHeader
            avatar={<Avatar sx={{}}>{lineDetails.type || '?'}</Avatar>}
            action={
              <>
                <IconButton onClick={onCardHeaderMenuClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={cardHeaderMenuAnchorEl}
                  open={openCardHeaderMenu}
                  onClose={onCardHeaderMenuClose}
                >
                  <MenuItem onClick={onCardHeaderMenuClose}>Edit</MenuItem>
                  <MenuItem onClick={onCardHeaderMenuClose}>Delete</MenuItem>
                </Menu>
              </>
            }
            title={lineDetails.name || 'Unknown Name'}
            subheader={`Last updated: ${format(
              new Date(
                lineDetails.lastModifiedDateTime ?? lineDetails.createdDateTime,
              ),
              'dd MMM yyy',
            )}`}
          />
          <CardMedia
            component="img"
            height="194"
            image={
              lineDetails?.coverImageUrl || '/images/coverImageFallback.png'
            }
          />
          <CardContent component={Stack} spacing={2} sx={{}}>
            {lineDetails.restrictionLevel && (
              <SlacklineDetailRestrictionField
                level={lineDetails.restrictionLevel}
                restrictionInfo={lineDetails.restrictionInfo}
              />
            )}
            <SlacklineDetailSpecsField
              header="Specs"
              isAccurate={lineDetails.isMeasurementAccurate}
              content={[
                {
                  label: 'Length',
                  value: `${lineDetails.length || '?'}m`,
                },
                {
                  label: 'Height',
                  value: `${lineDetails.height || '?'}m`,
                },
              ]}
            />
            <SlacklineDetailInfoField
              header="Description"
              content={lineDetails.description || 'Unknown'}
            />
            <SlacklineDetailInfoField
              header="Anchors"
              content={lineDetails.anchorsInfo || 'Unknown'}
            />
            <SlacklineDetailInfoField
              header="Access"
              content={lineDetails.accessInfo || 'Unknown'}
            />
            <SlacklineDetailInfoField
              header="Gear"
              content={lineDetails.gearInfo || 'Unknown'}
            />
            <SlacklineDetailInfoField
              header="Contact"
              content={lineDetails.contactInfo || 'Unknown'}
            />
            <SlacklineDetailInfoField
              header="Additional Details"
              content={lineDetails.extraInfo}
              skipIfEmpty
            />
          </CardContent>
          <CardActions>
            <IconButton>
              <InsertCommentIcon color="primary" />
            </IconButton>
            <IconButton>
              <MapIcon color="primary" />
            </IconButton>
            <IconButton>
              <ShareIcon color="primary" />
            </IconButton>
          </CardActions>
        </>
      )}
    </Card>
  );
};