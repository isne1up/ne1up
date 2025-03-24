import React, { useEffect, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MuiLink from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import Cached from '@mui/icons-material/Cached'
import useTheme from '@mui/material/styles/useTheme'
import styled from '@mui/material/styles/styled'

import { v4 as uuid } from 'uuid'

import { routes } from 'config/routes'
import { ShellContext } from 'contexts/ShellContext'
import { SettingsContext } from 'contexts/SettingsContext'
import { PeerNameDisplay } from 'components/PeerNameDisplay'
import { Form, Main } from 'components/Elements'
import Logo from 'img/logo.svg?react'

import { EmbedCodeDialog } from './EmbedCodeDialog'
import { CommunityRoomSelector } from './CommunityRoomSelector'

const StyledLogo = styled(Logo)({})

interface HomeProps {
  userId: string
}

export function Home({ userId }: HomeProps) {
  const { setTitle } = useContext(ShellContext)
  const { getUserSettings } = useContext(SettingsContext);
  const theme = useTheme()
  const [roomName, setRoomName] = useState(uuid())
  const [showEmbedCode, setShowEmbedCode] = useState(false)
  const navigate = useNavigate()
  const { colorMode } = getUserSettings();

  useEffect(() => {
    setTitle('anyone up?');
    document.body.setAttribute('data-theme', colorMode);
  }, [setTitle, colorMode])

  const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setRoomName(value)
  }

  const handleFormSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleJoinPublicRoomClick = () => {
    navigate(`/public/${roomName}`)
  }

  const handleJoinPrivateRoomClick = () => {
    navigate(`/private/${roomName}`)
  }

  const handleGetEmbedCodeClick = () => {
    setShowEmbedCode(true)
  }

  const handleEmbedCodeWindowClose = () => {
    setShowEmbedCode(false)
  }

  const isRoomNameValid = roomName.length > 0

  return (
    <Box className="Home">
      <Main
        sx={{
          maxWidth: theme.breakpoints.values.md,
          mt: 3,
          mx: 'auto',
          px: 2,
          textAlign: 'center',
        }}
      >
        <Link to={routes.ABOUT}>
      <Box
        sx={{
          px: 0.5,
          pb: 2,
          mx: 'auto',
          maxWidth: theme.breakpoints.values.sm,
          textAlign: 'center',
          fontSize: 'clamp(50px, 8vw, 115px)',
          fontWeight: 'bold', // Optional for styling
          lineHeight: 1,
          width: '100%',
        }}
      >
        hello, world
      </Box>
    </Link>

        <Form
          onSubmit={handleFormSubmit}
          sx={{ maxWidth: theme.breakpoints.values.sm, mx: 'auto' }}
        >
          <Typography sx={{ mb: 2 }}>
            Your username:{' '}
            <PeerNameDisplay paragraph={false} sx={{ fontWeight: 'bold' }}>
              {userId}
            </PeerNameDisplay>
          </Typography>
          <FormControl fullWidth>
            <TextField
              label="Room name (generated on your device)"
              variant="outlined"
              value={roomName}
              onChange={handleRoomNameChange}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="Regenerate room id"
                    onClick={() => setRoomName(uuid())}
                    size="small"
                  >
                    <Cached />
                  </IconButton>
                ),
                sx: { fontSize: { xs: '0.9rem', sm: '1rem' } },
              }}
              size="medium"
            />
          </FormControl>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              onClick={handleJoinPublicRoomClick}
              sx={{
                marginTop: 2,
              }}
              disabled={!isRoomNameValid}
            >
              New public room
            </Button>
            <Button
              variant="contained"
              onClick={handleJoinPrivateRoomClick}
              sx={{
                marginTop: 2,
                marginLeft: 2,
              }}
              disabled={!isRoomNameValid}
            >
              New private room
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleGetEmbedCodeClick}
              sx={{
                marginTop: 2,
                marginLeft: 2,
              }}
              disabled={!isRoomNameValid}
            >
              Get embed code
            </Button>
          </Box>
        </Form>
      </Main>
      <Divider sx={{ my: 2 }} />
      <Box maxWidth={theme.breakpoints.values.sm} mx="auto" px={2}>
        <CommunityRoomSelector />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          maxWidth: theme.breakpoints.values.sm,
          mx: 'auto',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="body1">
          This is a free communication tool that is designed for simplicity,
          privacy, and security. All interaction between you and your online
          peers is encrypted. There is no record of your conversation once you
          all leave.
        </Typography>
      </Box>
      <Box
        sx={{
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MuiLink
          href="https://github.com/ne1up/ne1up"
          target="_blank"
          sx={() => ({
            color: theme.palette.text.primary,
          })}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Open menu"
          >
            <GitHubIcon sx={{ fontSize: '2em' }} />
          </IconButton>
        </MuiLink>
      </Box>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 1 }}>
        Licensed under{' '}
        <MuiLink
          href="https://github.com/ne1up/ne1up/blob/develop/LICENSE"
          target="_blank"
        >
          GPL v2
        </MuiLink>
        . Please{' '}
        <MuiLink
          href="https://github.com/ne1up/ne1up/blob/develop/README.md"
          target="_blank"
        >
          read the docs
        </MuiLink>
        .
      </Typography>
      <EmbedCodeDialog
        showEmbedCode={showEmbedCode}
        handleEmbedCodeWindowClose={handleEmbedCodeWindowClose}
        roomName={roomName}
      />
    </Box>
  )
}
