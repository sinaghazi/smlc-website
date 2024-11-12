import { PositionMapping, PersonaExample, CompanyExample, CountryExample } from './positionMapping';

// Define the possible values for each axis
const axisValues = [-1, -0.5, 0, 0.5, 1];

// Generate all possible combinations of positions
function generatePositionCombinations() {
    const combinations: string[] = [];

    axisValues.forEach(x => {
        axisValues.forEach(y => {
            axisValues.forEach(z => {
                combinations.push(`${x}_${y}_${z}`);
            });
        });
    });

    return combinations;
}

// Helper function to determine leadership style based on position
function determineLeadershipStyle(x: number, y: number, z: number): string {
    let style = '';

    // X-axis: Individual vs. Collective
    if (x > 0) style += 'Individualistic ';
    else if (x < 0) style += 'Collaborative ';
    else style += 'Balanced ';

    // Y-axis: Emotional vs. Rational
    if (y > 0) style += 'Rational ';
    else if (y < 0) style += 'Emotional ';
    else style += 'Balanced ';

    // Z-axis: Risk-taking vs. Risk-averse
    if (z > 0) style += 'Risk-taking';
    else if (z < 0) style += 'Risk-averse';
    else style += 'Measured';

    return style.trim();
}

// Helper function to determine organizational style
function determineOrgStyle(x: number, y: number, z: number): string {
    let style = '';

    // X-axis: Hierarchical vs. Flat
    if (x > 0) style += 'Flat ';
    else if (x < 0) style += 'Hierarchical ';
    else style += 'Matrix ';

    // Y-axis: Task vs. People Oriented
    if (y > 0) style += 'People-Oriented ';
    else if (y < 0) style += 'Task-Oriented ';
    else style += 'Balanced ';

    // Z-axis: Process vs. Innovation
    if (z > 0) style += 'Innovation-Driven';
    else if (z < 0) style += 'Process-Driven';
    else style += 'Adaptive';

    return style.trim();
}

// Helper function to determine societal style
function determineSocietalStyle(x: number, y: number, z: number): string {
    let style = '';

    // X-axis: Collectivism vs. Free Markets
    if (x > 0) style += 'Free Market ';
    else if (x < 0) style += 'Collectivist ';
    else style += 'Mixed Economy ';

    // Y-axis: Human vs. System Centric
    if (y > 0) style += 'System-Centric ';
    else if (y < 0) style += 'Human-Centric ';
    else style += 'Balanced ';

    // Z-axis: Data vs. Intuition Driven
    if (z > 0) style += 'Data-Driven';
    else if (z < 0) style += 'Intuition-Driven';
    else style += 'Evidence-Based';

    return style.trim();
}

// Generate example based on position
function generatePersonalExample(x: number, y: number, z: number): PersonaExample {
    const style = determineLeadershipStyle(x, y, z);
    return {
        name: `${style} Leader`,
        traits: [
            `${x > 0 ? 'Individual' : x < 0 ? 'Collective' : 'Balanced'} decision-making`,
            `${y > 0 ? 'Analytical' : y < 0 ? 'Empathetic' : 'Balanced'} approach`,
            `${z > 0 ? 'Innovation-focused' : z < 0 ? 'Stability-focused' : 'Adaptive'} mindset`,
            `${style} leadership style`
        ],
        description: `A leader characterized by ${style.toLowerCase()} approach to management and decision-making`
    };
}

function generateBusinessExample(x: number, y: number, z: number): CompanyExample {
    const style = determineOrgStyle(x, y, z);
    return {
        name: `${style} Organization`,
        industry: 'Various',
        characteristics: [
            `${x > 0 ? 'Flat' : x < 0 ? 'Hierarchical' : 'Matrix'} structure`,
            `${y > 0 ? 'People-first' : y < 0 ? 'Task-first' : 'Balanced'} culture`,
            `${z > 0 ? 'Innovation' : z < 0 ? 'Process' : 'Adaptive'} focus`,
            `${style} management approach`
        ],
        description: `An organization exemplifying ${style.toLowerCase()} principles and practices`
    };
}

function generateCountryExample(x: number, y: number, z: number): CountryExample {
    const style = determineSocietalStyle(x, y, z);
    return {
        name: `${style} Society`,
        region: 'Theoretical Model',
        characteristics: [
            `${x > 0 ? 'Market-driven' : x < 0 ? 'State-managed' : 'Mixed'} economy`,
            `${y > 0 ? 'System-oriented' : y < 0 ? 'Human-oriented' : 'Balanced'} governance`,
            `${z > 0 ? 'Data-driven' : z < 0 ? 'Intuition-driven' : 'Evidence-based'} policy`,
            `${style} societal framework`
        ],
        description: `A society characterized by ${style.toLowerCase()} approaches to governance and social organization`,
        exists: false
    };
}

// Generate complete position mapping
export function generateCompletePositionMapping(): PositionMapping {
    const mapping: PositionMapping = {
        personal: {},
        business: {},
        country: {}
    };

    const combinations = generatePositionCombinations();

    combinations.forEach(combo => {
        const [x, y, z] = combo.split('_').map(Number);

        mapping.personal[combo] = [generatePersonalExample(x, y, z)];
        mapping.business[combo] = [generateBusinessExample(x, y, z)];
        mapping.country[combo] = [generateCountryExample(x, y, z)];
    });

    return mapping;
}

// Merge generated mapping with existing examples
export function mergeWithExistingMapping(
    generated: PositionMapping,
    existing: PositionMapping
): PositionMapping {
    const merged = JSON.parse(JSON.stringify(generated)) as PositionMapping;

    // Merge personal examples
    Object.entries(existing.personal).forEach(([key, examples]) => {
        if (merged.personal[key]) {
            merged.personal[key] = [...examples, ...merged.personal[key]];
        } else {
            merged.personal[key] = examples;
        }
    });

    // Merge business examples
    Object.entries(existing.business).forEach(([key, examples]) => {
        if (merged.business[key]) {
            merged.business[key] = [...examples, ...merged.business[key]];
        } else {
            merged.business[key] = examples;
        }
    });

    // Merge country examples
    Object.entries(existing.country).forEach(([key, examples]) => {
        if (merged.country[key]) {
            merged.country[key] = [...examples, ...merged.country[key]];
        } else {
            merged.country[key] = examples;
        }
    });

    return merged;
}
