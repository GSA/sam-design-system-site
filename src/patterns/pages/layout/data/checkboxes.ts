const organization = {
  label: 'Organization',
  options: [
    {
      label: 'Dept or Ind. Agency',
      name: 'Dept or Ind. Agency',
      value: 'Agency'
    }
  ],
  selected: [ 'Agency' ]
};

const listing = {
  label: 'Listing',
  options: [
    {
      label: 'CFDA Number',
      name: 'CFDA Number',
      value: 'CFDANumber'
    },
    {
      label: 'Title',
      name: 'Title',
      value: 'Title'
    }
  ],
  selected: [ 'CFDANumber', 'Title' ]
};

const status = {
  label: 'Status',
  options: [
    {
      label: 'Current Status',
      name: 'Current Status',
      value: 'CurrentStatus'
    },
    {
      label: 'Last Updated Date',
      name: 'Last Updated Date',
      value: 'LastUpdatedDate'
    },
    {
      label: 'Obligations Updated',
      name: 'Obligations Updated',
      value: 'ObligationsUpdated'
    },
    {
      label: 'OMB Review Date',
      name: 'OMB Review Date',
      value: 'OMBReviewDate'
    },
    {
      label: 'Last Published Date',
      name: 'Last Published Date',
      value: 'LastPublishedDate'
    },
    {
      label: 'Auto Published',
      name: 'Auto Published',
      value: 'AutoPublished'
    }
  ],
  selected: [
    'CurrentStatus',
    'LastUpdatedDate',
    'ObligationsUpdated',
    'OMBReviewDate',
    'LastPublishedDate',
    'AutoPublished'
  ]
};

export const checkboxes = {
  organization,
  listing,
  status
};
