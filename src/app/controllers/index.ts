import express from 'express';
import Models from '../models';
import * as papers from './papers';
import * as papersFE from './frontend/papers';
import * as affiliations from './affiliations';
import * as venues from './venues';
import * as venuesFE from './frontend/venues';
import * as authors from './authors';
import * as authorsFE from './frontend/authors';
import * as users from './users';
import { APIOptions } from '../../config/interfaces';

export class Controllers {
  static initialize(models: Models, router: express.Router, options: APIOptions) {
    affiliations.initialize(models.Affiliation, router, options);
    authors.initialize(models.Author, router, options);
    papers.initialize(models.Paper, router, options);
    venues.initialize(models.Venue, router, options);
    users.initialize(models.User, router, options);

    authorsFE.initialize(models.Author, router, options);
    papersFE.initialize(models.Paper, router, options);
    venuesFE.initialize(models.Venue, router, options);
  }
}