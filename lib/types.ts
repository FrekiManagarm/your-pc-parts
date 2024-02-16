export interface User {
  id: number;
  emailAdress: string;
  firstname: string;
  lastname: string;
  avatarUrl: string;
  stripeId: string;
  role: Role;
  setups: Setup[];
}

export interface AuthModel {
  user: User;
  tokens: BackendTokens;
}

export type BackendTokens = {
  accessToken: string;
  refreshToken: string;
};

export type RefreshTokens = {
  accessToken: string;
  refreshToken: string;
  expires_in: number;
};

export interface CPUCooler {
  id: number;
  rpm?: number | null;
  name: string;
  imageUrl?: string | null;
  noise_level?: number | null;
  color?: string | null;
}

export interface Motherboard {
  id: number;
  socket?: string[] | null;
  form_factor: string;
  max_memory: number;
  memory_slots: number;
  name: string;
  imageUrl?: string | null;
  color: string;
}

export interface RAM {
  id: number;
  speed: number[];
  modules: number[];
  price_per_gb: number;
  color?: string | null;
  imageUrl?: string | null;
  name: string;
  first_word_latency?: string | null;
  cas_latency: string;
}

export interface CPU {
  id: number;
  core_count: number;
  threads_count: number;
  name: string;
  imageUrl: string;
  core_clock: number;
  boost_clock: number;
  tdp?: number | null;
  graphics?: boolean | null;
  smt?: boolean | null;
}

export interface HDD {
  id: number;
  capacity: number;
  price_per_gb: number;
  name: string;
  imageUrl?: string | null;
  type?: string | null;
  cache?: number | null;
  form_factor?: string | null;
  interface?: string | null;
}

export interface SSD {
  id: number;
  capacity: number;
  price_per_gb: number;
  name: string;
  imageUrl?: string | null;
  type?: string | null;
  cache?: number | null;
  form_factor?: string | null;
  interface?: string | null;
}

export interface GPU {
  id: number;
  chipset?: string | null;
  memory?: number | null;
  name: string;
  imageUrl?: string | null;
  core_clock?: number | null;
  boost_clock?: number | null;
  color?: string | null;
  length?: number | null;
}

export interface Case {
  id: number;
  type: CaseType;
  color?: string | null;
  name: string;
  imageUrl?: string | null;
  included_PSU_W?: number | null;
  side_panel?: string | null;
  external_volume?: string | null;
  internal_35_bays?: number | null;
}

export interface PSU {
  id: number;
  type: PSUType;
  name: string;
  imageUrl?: string | null;
  efficiency: PSUEff;
  wattage?: number | null;
}

export interface Monitor {
  id: number;
  screen_size?: number | null;
  resolution: number[];
  name: string;
  imageUrl?: string | null;
  refresh_rate?: number | null;
  response_time?: number | null;
  panel_type: MonitorPanelType;
  aspect_ratio?: string | null;
}

export interface SoundCard {
  id: number;
  channels?: string | null;
  digital_audio?: string | null;
  name: string;
  imageUrl?: string | null;
  snr?: number | null;
  sample_rate?: number | null;
  chipset?: string | null;
  interface?: string | null;
}

export interface Headphones {
  id: number;
  type: HeadphonesType;
  frequency_response: number[];
  microphone?: boolean | null;
  wireless?: boolean | null;
  name: string;
  imageUrl?: string | null;
  noise_cancellation?: boolean | null;
  enclosure_type: EnclosureType;
  color: string;
}

export interface Keyboard {
  id: number;
  style: KeyboardStyle;
  switches?: string | null;
  backlit?: string | null;
  name: string;
  imageUrl?: string;
  tenkeyless?: boolean | null;
  connection_type: ConnectionType;
  color?: string | null;
}

export interface Mouse {
  id: number;
  tracking_method: MouseTrackMethod;
  connection_type: ConnectionType;
  max_dpi?: number | null;
  name: string;
  imageUrl?: string | null;
  hand_orientation: MouseOrientation;
  color?: string | null;
}

export interface Speakers {
  id: number;
  configuration?: string | null;
  name: string;
  imageUrl?: string | null;
  wattage?: number | null;
  frequency_response?: number | null;
  color?: string | null;
}

export interface Webcam {
  id: number;
  resolutions: string[];
  name: string;
  imageUrl?: string | null;
  connection: ConnectionType;
  focus_type: WebcamFocusType;
  os: string[];
  fov?: number | null;
}

export interface CaseFan {
  id: number;
  size: number;
  name: number;
  imageUrl?: string | null;
  color?: string | null;
  rpm: number[];
  airflow: number[];
}

export interface Setup {
  id: number;
  cpu: CPU;
  gpu: GPU;
  hdd: HDD;
  case: Case;
  ram: RAM;
  monitors: Monitor[];
  name?: string | null;
  ssds: SSD[];
  sound_card: SoundCard;
  cpu_cooler: CPUCooler;
  motherboard: Motherboard;
  heaphones: Headphones;
  keyboard: Keyboard;
  mouse: Mouse;
  speakers: Speakers[];
  webcam: Webcam;
  case_fans: CaseFan[];
  user: User;
}

export enum Role {
  ADMINISTRATOR,
  CLIENT,
  MODERATOR,
}

export enum CaseType {
  EATX,
  ATX,
  mATX,
  mITX,
}

export enum PSUType {
  ATX,
  mATX,
  SFX,
}

export enum PSUEff {
  bronze,
  silver,
  gold,
  platinium,
  titanium,
}

export enum MonitorPanelType {
  IPS,
  TN,
  VA,
  OLED,
}

export enum HeadphonesType {
  Circumaural,
  Supra_aural,
  Earbuds,
  Waterproof,
  DJ,
}

export enum EnclosureType {
  Closed,
  Open,
}

export enum KeyboardStyle {
  Gaming,
  Mini,
  Office,
}

export enum ConnectionType {
  Wired,
  Wireless,
  Bluetooth,
  Both,
}

export enum MouseTrackMethod {
  Optical,
  Laser,
}

export enum MouseOrientation {
  Right,
  Left,
  Both,
}

export enum WebcamFocusType {
  Auto,
  Manual,
  Fixed,
}
