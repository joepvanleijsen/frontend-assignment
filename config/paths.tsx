export const PAGE_PATHS = {
	HOME: {
		slug: '/',
	},
	ACCOUNT: {
		slug: 'account',
	},
	BILLING: {
		slug: 'billing',
	},
	DASHBOARD: {
		slug: 'dashboard',
	},
	DOCUMENTATION: {
		url: 'https://docs.strmprivacy.io/',
	},
	ONBOARDING: {
		slug: 'onboarding',
	},
	ORGANIZATION: {
		slug: 'organization',
		INSTALLATION: {
			slug: 'organization/installation',
			CONFIGURATION: {
				slug: 'organization/installation/configuration',
			},
			STATUS: {
				slug: 'organization/installation/status',
			},
		},
	},
	PEOPLE: { slug: 'people' },
	PROJECTS: {
		slug: 'projects',
		PROJECT: {
			slug: 'projects/[project_id]',
			DATA_CONTRACTS: {
				slug: 'projects/[project_id]/data-contracts',
				DATA_CONTRACT: {
					slug: 'projects/[project_id]/data-contracts/[data_contract_id]',
				},
			},
		},
	},
	UPGRADE: {
		slug: 'upgrade',
	},
	SETTINGS: { slug: 'settings' },
};

export const getPageUrl = (pathname, values?) => {
	console.log('getPageUrl()', [pathname, values]);

	let url;

	if (pathname.url) {
		url = pathname.url;
	} else if (pathname.slug) {
		url = {
			pathname: '/' + pathname.slug,
			// query: { slug: 'my-post' },
		};

		if (values) {
			url.query = values;
		}
	}

	return url;
};
