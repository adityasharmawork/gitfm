"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Grid } from "@react-three/drei"
import type { GitHubData, Repository } from "@/lib/types"
import type * as THREE from "three"

interface CodeCityProps {
  data: GitHubData
}

function Building({
  repo,
  position,
  index,
  maxScore,
}: { repo: Repository; position: [number, number, number]; index: number; maxScore: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Calculate a score based on multiple factors
  const repoScore = repo.stars * 3 + repo.commits * 2 + repo.prs * 5 + repo.forks * 2
  // Normalize height between 2 and 15 based on max score in the dataset
  const normalizedHeight = maxScore > 0 ? 2 + (repoScore / maxScore) * 13 : 2 + (index % 5) * 2.5 // Fallback: vary height by index if no data

  const height = Math.max(2, Math.min(15, normalizedHeight))
  const brightness = Math.min(1, repo.prs / 10)

  // Color based on language or position for variety
  const languageColors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    Go: "#00ADD8",
    Rust: "#dea584",
    Ruby: "#ff00ff",
    PHP: "#4F5D95",
    "C++": "#f34b7d",
    C: "#00ffff",
    "C#": "#00ff88",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
  }
  const defaultColors = ["#ff00ff", "#00ffff", "#00ff88", "#8800ff", "#ff8800"]
  const color =
    repo.language && languageColors[repo.language]
      ? languageColors[repo.language]
      : defaultColors[index % defaultColors.length]

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = height / 2 + Math.sin(state.clock.elapsedTime + index) * 0.1
    }
  })

  return (
    <group position={position}>
      {/* Main building */}
      <mesh ref={meshRef} position={[0, height / 2, 0]}>
        <boxGeometry args={[1.5, height, 1.5]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3 + brightness * 0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Windows (glowing dots) */}
      {Array.from({ length: Math.floor(height / 2) }).map((_, i) => (
        <mesh key={i} position={[0.8, i * 2 + 1, 0]}>
          <boxGeometry args={[0.1, 0.3, 0.3]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={brightness + 0.3} />
        </mesh>
      ))}

      {/* Repo name label */}
      <Text position={[0, height + 0.5, 0]} fontSize={0.3} color={color} anchorX="center" anchorY="middle">
        {repo.name.slice(0, 10)}
      </Text>
    </group>
  )
}

function CityScene({ repositories }: { repositories: Repository[] }) {
  const gridRef = useRef<THREE.Group>(null)

  const maxScore = useMemo(() => {
    return Math.max(
      1,
      ...repositories.map((repo) => repo.stars * 3 + repo.commits * 2 + repo.prs * 5 + (repo.forks || 0) * 2),
    )
  }, [repositories])

  // Generate city layout
  const buildings = useMemo(() => {
    const positions: [number, number, number][] = []
    const gridSize = Math.ceil(Math.sqrt(repositories.length))
    const spacing = 4

    repositories.forEach((_, index) => {
      const x = (index % gridSize) * spacing - (gridSize * spacing) / 2
      const z = Math.floor(index / gridSize) * spacing - (gridSize * spacing) / 2
      positions.push([x, 0, z])
    })

    return positions
  }, [repositories])

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 20, 10]} intensity={1} color="#ff00ff" />
      <pointLight position={[-10, 20, -10]} intensity={1} color="#00ffff" />
      <spotLight position={[0, 30, 0]} angle={0.5} penumbra={1} intensity={0.5} color="#8800ff" />

      {/* Tron-style grid floor */}
      <Grid
        position={[0, -0.01, 0]}
        args={[50, 50]}
        cellSize={2}
        cellThickness={0.5}
        cellColor="#ff00ff"
        sectionSize={10}
        sectionThickness={1}
        sectionColor="#8800ff"
        fadeDistance={50}
        fadeStrength={1}
        followCamera={false}
      />

      {/* Buildings */}
      <group ref={gridRef}>
        {repositories.map((repo, index) => (
          <Building key={repo.name} repo={repo} position={buildings[index]} index={index} maxScore={maxScore} />
        ))}
      </group>

      {/* Fog for atmosphere */}
      <fog attach="fog" args={["#0a0a1a", 20, 60]} />
    </>
  )
}

export function CodeCity({ data }: CodeCityProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-lg border border-[#00ff88]/30 bg-card/50 backdrop-blur-sm overflow-hidden neon-border-green">
        <div className="h-[400px] md:h-[500px] bg-[#0a0a1a]">
          <Canvas camera={{ position: [20, 15, 20], fov: 60 }} gl={{ antialias: true }}>
            <CityScene repositories={data.repositories} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2.2}
              minDistance={10}
              maxDistance={50}
            />
          </Canvas>
        </div>

        {/* Legend */}
        <div className="p-4 border-t border-[#00ff88]/30">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-6 bg-gradient-to-t from-[#ff00ff]/50 to-[#ff00ff]" />
              <span>Height = Stars + Commits + PRs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]" />
              <span>Windows = Activity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00ff88]">Drag to explore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
