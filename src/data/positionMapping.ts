// Real-world examples, all re-placed onto the three SHARED dimensions
// (Agency / Mode / Orientation), sign convention + = self-directed / analytical / bold.
// Society placements follow Hofstede (x), Trompenaars universalism–particularism (y).
// See constants/dimensions.ts for pole meanings per entity kind.
//
// We no longer pre-generate a 125-cell dictionary. For any position we compute a
// magnitude-aware profile on the fly (profileFor) and find the closest real example
// (nearestExample). Coordinates below are considered judgment calls — easy to tune.

import {
    EntityKind,
    DimensionKey,
    DIMENSIONS,
    POLES,
    ENTITY_LABEL,
} from '../constants/dimensions';
import { Position } from '../components/SMLC/types';

export interface Example {
    name: string;
    kind: EntityKind;
    /** region / industry / context — optional flavor */
    note?: string;
    blurb: string;
    /** hand-authored real-world example (true) vs a computed profile (false) */
    real: boolean;
    position: Position;
}

const p = (x: number, y: number, z: number): Position => ({ x, y, z });

export const EXAMPLES: Record<EntityKind, Example[]> = {
    // + = Self-directed, Analytical, Bold
    person: [
        { name: 'Elon Musk', kind: 'person', note: 'Entrepreneur', real: true, position: p(1, 1, 1), blurb: 'Pushes boundaries; data-driven, high risk tolerance, strong individual vision.' },
        { name: 'Jeff Bezos', kind: 'person', note: 'Amazon', real: true, position: p(1, 1, 0.5), blurb: 'Long-term, analytical, calculated risk-taking.' },
        { name: 'Linus Torvalds', kind: 'person', note: 'Engineer', real: true, position: p(1, 1, 0), blurb: 'Strong individual standards, deeply analytical, blunt and direct.' },
        { name: 'Sina Ghazi', kind: 'person', note: "That's me", real: true, position: p(0.5, 1, 0.5), blurb: 'Self-directed but Finland-tempered; analytical to the core; bold, patiently.' },
        { name: 'Mary Barra', kind: 'person', note: 'GM CEO', real: true, position: p(0.5, 0.5, 0.5), blurb: 'Balanced, forward-thinking, measured risk-taking.' },
        { name: 'Satya Nadella', kind: 'person', note: 'Microsoft CEO', real: true, position: p(0, 0.5, 0.5), blurb: 'Collaborative, analytical, culturally intelligent.' },
        { name: 'Barack Obama', kind: 'person', note: 'Leader', real: true, position: p(0, 0, 0.5), blurb: 'Balanced and deliberate, willing to act.' },
        { name: 'Indra Nooyi', kind: 'person', note: 'PepsiCo', real: true, position: p(-0.5, 0, -0.5), blurb: 'Stakeholder-focused, balanced, sustainable growth.' },
        { name: 'Angela Merkel', kind: 'person', note: 'Leader', real: true, position: p(-0.5, 1, -0.5), blurb: 'Patient and analytical; consensus within coalitions; understated authority.' },
        { name: 'The quiet-competence leader', kind: 'person', note: 'Nordic archetype', real: true, position: p(-0.5, 0.5, -0.5), blurb: 'Lets the work speak; analytical but unshowy; trusts patience over self-promotion.' },
        { name: 'The consensus-builder', kind: 'person', note: 'High-context archetype', real: true, position: p(-1, -0.5, -0.5), blurb: 'Decides by group harmony; holistic and context-sensitive; avoids standing out.' },
        { name: 'Jacinda Ardern', kind: 'person', note: 'Leader', real: true, position: p(-1, -1, 1), blurb: 'Empathy-led and intuitive, yet decisive in a crisis.' },
        { name: 'The bazaar entrepreneur', kind: 'person', note: 'Improviser archetype', real: true, position: p(1, -1, 1), blurb: 'Self-reliant; reads people, not spreadsheets; acts now and adjusts later.' },
        { name: 'Dan Price', kind: 'person', note: 'Employee-first founder', real: true, position: p(-1, -1, -1), blurb: 'Collective decision-making, relational, conservative growth.' },
    ],
    // + = Flat, Process-led, Flexible
    business: [
        { name: 'Valve', kind: 'business', note: 'Gaming', real: true, position: p(1, -1, 1), blurb: 'Flat (no-management) structure, creative/people-led, highly flexible.' },
        { name: 'Silicon Valley startup', kind: 'business', note: 'Tech', real: true, position: p(1, 0, 1), blurb: 'Flat and fast; ship, measure, iterate; individual ownership prized.' },
        { name: 'Open-source community', kind: 'business', note: 'Commons (Wikipedia / Linux)', real: true, position: p(1, 0, 0.5), blurb: 'No formal hierarchy; contribution-based status; transparent by default.' },
        { name: 'Spotify', kind: 'business', note: 'Tech', real: true, position: p(0.5, 0, 1), blurb: 'Squad autonomy and a strong engineering culture; rapid innovation.' },
        { name: 'Google', kind: 'business', note: 'Tech', real: true, position: p(0.5, 0.5, 0.5), blurb: 'Semi-flat, data-driven, employee-empowered.' },
        { name: 'Microsoft', kind: 'business', note: 'Tech', real: true, position: p(0, 0.5, 0.5), blurb: 'Matrix organization; balanced; innovative yet stable.' },
        { name: 'Nordic workplace (Finnish team)', kind: 'business', note: 'Various', real: true, position: p(0.5, -0.5, -0.5), blurb: 'Low power distance; wellbeing-led; steady over disruptive.' },
        { name: 'Patagonia', kind: 'business', note: 'Apparel', real: true, position: p(0, -0.5, -0.5), blurb: 'Mission- and values-led; people and planet; deliberate, not growth-at-all-costs.' },
        { name: 'Johnson & Johnson', kind: 'business', note: 'Healthcare', real: true, position: p(-0.5, 1, -0.5), blurb: 'Structured hierarchy, quality/process focus, risk-managed.' },
        { name: 'German Mittelstand', kind: 'business', note: 'Industrial', real: true, position: p(-0.5, 1, -1), blurb: 'Engineering excellence, process discipline, long-term ownership.' },
        { name: 'S-Group cooperative', kind: 'business', note: 'Cooperative (Finland)', real: true, position: p(-0.5, -0.5, -1), blurb: 'Member-owned, community benefit, steady and process-driven.' },
        { name: 'Toyota', kind: 'business', note: 'Automotive', real: true, position: p(-1, 1, -1), blurb: 'Lean manufacturing, strong process, hierarchical structure.' },
        { name: 'Regulated bank', kind: 'business', note: 'Finance', real: true, position: p(-1, 1, -0.5), blurb: 'Strong hierarchy and controls; auditability first; deterministic process.' },
    ],
    // + = Individualist, Rule-based (universalist), Progressive · Global
    society: [
        { name: 'United States', kind: 'society', note: 'North America', real: true, position: p(1, 0, 0.5), blurb: 'Market-driven and individualist; contracts and courts matter, but so does the hustle; self-advocacy rewarded.' },
        { name: 'Estonia', kind: 'society', note: 'Northern Europe', real: true, position: p(0.5, 0.5, 1), blurb: 'Digital society and e-governance; tech-driven and outward-looking.' },
        { name: 'Singapore', kind: 'society', note: 'Southeast Asia', real: true, position: p(-0.5, 1, 1), blurb: 'Communitarian yet hyper-global; efficient and rule-bound; smart-nation.' },
        { name: 'Netherlands', kind: 'society', note: 'Western Europe', real: true, position: p(0.5, 0, 0.5), blurb: 'Consensus ("polder model") plus open markets; famously direct.' },
        { name: 'Switzerland', kind: 'society', note: 'Central Europe', real: true, position: p(0.5, 0.5, -0.5), blurb: 'Direct democracy; strong institutions; risk-managed and local-rooted.' },
        { name: 'Germany', kind: 'society', note: 'Central Europe', real: true, position: p(0, 0.5, 0), blurb: 'Social market economy; rule-following; balanced.' },
        { name: 'Denmark', kind: 'society', note: 'Nordic Europe', real: true, position: p(0.5, -0.5, 1), blurb: 'High-trust and egalitarian; informal over formal; progressive welfare.' },
        { name: 'Norway', kind: 'society', note: 'Nordic Europe', real: true, position: p(0.5, -0.5, 0.5), blurb: 'Universal welfare; collective bargaining; social equality.' },
        { name: 'Finland', kind: 'society', note: 'Nordic Europe', real: true, position: p(0.5, 0.5, 0), blurb: 'Individualist but understated; institutional trust first; quiet competence over confidence.' },
        { name: 'France', kind: 'society', note: 'Western Europe', real: true, position: p(0, 0.5, -0.5), blurb: 'Strong state and social programs; cultural preservation.' },
        { name: 'South Korea', kind: 'society', note: 'East Asia', real: true, position: p(-0.5, 1, 0.5), blurb: 'Collective and rule-intense; intensely tech-driven.' },
        { name: 'Japan', kind: 'society', note: 'East Asia', real: true, position: p(-1, 1, -0.5), blurb: 'Collectivist; strong protocol and process; tradition-valuing.' },
        { name: 'Iran', kind: 'society', note: 'Western Asia', real: true, position: p(-0.5, -1, -1), blurb: 'Relationships over institutions; improvisation under constraint; tradition.' },
    ],
};

// --- Magnitude-aware profile (computed for any position) ---

export interface AxisPhrase {
    dimension: string;
    pole: string;
    /** -1..1 */
    value: number;
    text: string;
}

export interface Profile {
    label: string;
    phrases: AxisPhrase[];
    blurb: string;
}

const intensityWord = (v: number): string =>
    Math.abs(v) === 1 ? 'Strongly' : 'Leans';

export const axisPhrase = (kind: EntityKind, key: DimensionKey, v: number): AxisPhrase => {
    const pole = POLES[kind][key];
    const dimension = DIMENSIONS.find((d) => d.key === key)!.name;
    if (v === 0) {
        return { dimension, pole: 'balanced', value: 0, text: `Balanced (${pole.neg} / ${pole.pos})` };
    }
    const word = v > 0 ? pole.pos : pole.neg;
    return { dimension, pole: word, value: v, text: `${intensityWord(v)} ${word.toLowerCase()}` };
};

export const profileFor = (kind: EntityKind, position: Position): Profile => {
    const phrases = DIMENSIONS.map((d) => axisPhrase(kind, d.key, position[d.key as keyof Position]));

    // label = the leaning poles, joined; balanced if all zero
    const leaning = DIMENSIONS.map((d) => {
        const v = position[d.key as keyof Position];
        if (v === 0) return null;
        return v > 0 ? POLES[kind][d.key].pos : POLES[kind][d.key].neg;
    }).filter(Boolean) as string[];

    const label = leaning.length ? leaning.join(' · ') : 'Fully balanced';
    const blurb = `A ${ENTITY_LABEL[kind].toLowerCase()} profile: ${phrases
        .map((p) => p.text.toLowerCase())
        .join(', ')}.`;

    return { label, phrases, blurb };
};

// --- Nearest real-world example ---

export interface Nearest {
    example: Example;
    distance: number;
    /** 0..1, where 1 = identical position */
    similarity: number;
}

const MAX_DISTANCE = Math.sqrt(12); // opposite corners of a 2×2×2 cube

const distance = (a: Position, b: Position): number =>
    Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);

export const nearestExample = (kind: EntityKind, position: Position): Nearest | null => {
    const list = EXAMPLES[kind];
    if (!list.length) return null;
    let best = list[0];
    let bestD = Infinity;
    for (const e of list) {
        const d = distance(e.position, position);
        if (d < bestD) {
            bestD = d;
            best = e;
        }
    }
    return { example: best, distance: bestD, similarity: 1 - bestD / MAX_DISTANCE };
};

export interface PositionInsight {
    profile: Profile;
    /** a real example sitting exactly here, if any */
    exact?: Example;
    nearest: Nearest | null;
}

export const getPositionInsight = (kind: EntityKind, position: Position): PositionInsight => {
    const profile = profileFor(kind, position);
    const nearest = nearestExample(kind, position);
    const exact = nearest && nearest.distance === 0 ? nearest.example : undefined;
    return { profile, exact, nearest };
};
